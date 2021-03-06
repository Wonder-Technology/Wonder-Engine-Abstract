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
    // switch groups->ListSt.fromArray->ListSt.getBy(({name}: group) => name === groupName) {
    // Js.Array.find()
    switch groups->ListSt.fromArray->ListSt.getBy(({name}: group) => name === groupName) {
    // | None => Result.failWith(j`groupName:$groupName not in groups`)
    | None => Exception.throwErr(Exception.buildErr(j`groupName:$groupName not in groups`))
    | Some(group) => group
    }

  let _buildJobStream = (execFunc, buildRepoFunc) => {
    open WonderBsMost.Most
    execFunc->just->flatMap(func => func(buildRepoFunc()), //   {

    // , _)->flatMap(result => result->Result.either(s => s->just, f => f->throwError), _)
    _)
  }

  let _buildJobStreams = (
    (buildPipelineStreamFunc, getExecFunc, buildRepoFunc),
    (pipelineName, elements),
    groups,
  ) =>
    elements
    ->ListSt.fromArray
    // ->ListSt.traverseReduceResultM(list{}, (streams, {name, type_}: element) =>
    ->ListSt.reduce(list{}, (streams, {name, type_}: element) =>
      switch type_ {
      | #job =>
        let execFunc = getExecFunc(pipelineName, name)->Js.Nullable.to_opt->OptionSt.unsafeGet

        streams->ListSt.push(execFunc->_buildJobStream(buildRepoFunc))

      // ->OptionSt.get
      // ->Result.mapSuccess(execFunc => streams->ListSt.push(execFunc->_buildJobStream))
      | #group =>
        let group = _findGroup(name, groups)
        let stream = buildPipelineStreamFunc(
          (getExecFunc, buildRepoFunc),
          pipelineName,
          group,
          groups,
        )
        streams->ListSt.push(stream)
      // ->Result.bind(group => buildPipelineStreamFunc(pipelineName, group, groups))
      // ->Result.mapSuccess(stream => streams->ListSt.push(stream))
      }
    )

  let rec _buildPipelineStream = (
    (getExecFunc, buildRepoFunc),
    pipelineName,
    {name, link, elements},
    groups,
  ) => {
    let streams = _buildJobStreams(
      (_buildPipelineStream, getExecFunc, buildRepoFunc),
      (pipelineName, elements),
      groups,
    )
    // ->Result.mapSuccess(streams =>

    streams
    ->ListSt.toArray
    ->switch link {
    | #merge => WonderBsMost.Most.mergeArray
    | #concat => MostUtils.concatArray
    }
    // )
  }

  let parse = ((getExecFunc, buildRepoFunc), {name, groups, firstGroup}) => {
    let group = _findGroup(firstGroup, groups)
    (name, _buildPipelineStream((getExecFunc, buildRepoFunc), name, group, groups))
    // ->Obj.magic->WonderBsMost.Most.map(_ => Result.succeed(), _)
    // ->Result.bind(group =>
    //   _buildPipelineStream(name, group, groups)->Result.mapSuccess(pipelineStream =>
    //     pipelineStream->Obj.magic->WonderBsMost.Most.map(_ => Result.succeed(), _)
    //   )
    // )
    // ->Result.mapSuccess(stream => (name, stream))
  }
}
