open DirectorUtilsForJs

let _getStreamFromTuple = ((_, pipelineStream)) => pipelineStream

let _throwErr = %bs.raw(`
(err) => {
    throw err;
}
`)

let _getStream = streamDataResult =>
  streamDataResult
  // TODO use Promise.reject instead of throw!
  // ->Result.handleFail(_throwErr)
  ->_getStreamFromTuple

let init = () => {
  DpContainerForJs.unsafeGetSceneRenderWorkDp().init()
  DpContainerForJs.unsafeGetSceneRenderWorkDp().getInitPipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

let update = () => {
  DpContainerForJs.unsafeGetSceneRenderWorkDp().getUpdatePipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

let render = () => {
  DpContainerForJs.unsafeGetSceneRenderWorkDp().getRenderPipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

let setSceneRenderWorkDp = dp => {
  DpContainerForJs.setSceneRenderWorkDp(dp)
}

let setSceneGraphRepoDp = dp => {
  DpContainerForJs.setSceneGraphRepoDp(dp)
}
