module MostUtils = {
  open WonderBsMost.Most

  let _isFromEventStream = %bs.raw(`
  function(stream){
    var source = stream.source;
    return !!source.event && !!source.source;
  }
  `)

  let concatArray = streamArr =>
    switch Js.Array.length(streamArr) {
    | 0 => WonderBsMost.Most.just(Obj.magic(1))
    | _ =>
      streamArr
      ->ArraySt.sliceFrom(1)
      ->ArraySt.reduceOneParam(streamArr[0], (. stream1, stream2) =>
        _isFromEventStream(stream1) === true ? stream2->concat(stream1) : stream2->concat(stream1)
      )
    }
}

module ParsePipelineData = {
  open PipelineDOTypeForJs

  let _findGroup = (groupName, groups) =>
    switch groups->ListSt.getBy(({name}: group) => name === groupName) {
    | None => Result.failWith(j`groupName:$groupName not in groups`)
    | Some(group) => group->Result.succeed
    }

  let _buildJobStream = execFunc => {
    open WonderBsMost.Most
    execFunc->just->flatMap(func =>
      func({
        sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoDp(),
      })
    , _)->flatMap(result => result->Result.either(s => s->just, f => f->throwError), _)
  }

  let _buildJobStreams = ((pipelineName, elements), groups, buildPipelineStreamFunc) =>
    elements->ListSt.traverseReduceResultM(list{}, (streams, {name, type_}: element) =>
      switch type_ {
      | Job =>
        DpContainerForJs.unsafeGetSceneRenderWorkDp().getExecFunc(pipelineName, name)
        ->OptionSt.get
        ->Result.mapSuccess(execFunc => streams->ListSt.push(execFunc->_buildJobStream))
      | Group =>
        _findGroup(name, groups)
        ->Result.bind(group => buildPipelineStreamFunc(pipelineName, group, groups))
        ->Result.mapSuccess(stream => streams->ListSt.push(stream))
      }
    )

  let rec _buildPipelineStream = (pipelineName, {name, link, elements}, groups) =>
    _buildJobStreams(
      (pipelineName, elements),
      groups,
      _buildPipelineStream,
    )->Result.mapSuccess(streams =>
      streams
      ->ListSt.toArray
      ->switch link {
      | Merge => WonderBsMost.Most.mergeArray
      | Concat => MostUtils.concatArray
      }
    )

  let parse = ({name, groups, firstGroup}) =>
    _findGroup(firstGroup, groups)
    ->Result.bind(group =>
      _buildPipelineStream(name, group, groups)->Result.mapSuccess(pipelineStream =>
        pipelineStream->Obj.magic->WonderBsMost.Most.map(_ => Result.succeed(), _)
      )
    )
    ->Result.mapSuccess(stream => (name, stream))
}
