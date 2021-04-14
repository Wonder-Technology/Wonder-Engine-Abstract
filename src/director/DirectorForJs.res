open DirectorUtils;

let _getStreamFromTuple = ((_, pipelineStream)) => pipelineStream

let _throwErr = %bs.raw(`
(err) => {
    throw err;
}
`)

let _getStream = streamDataResult =>
  streamDataResult
  // TODO use Promise.reject instead of throw!
  ->Result.handleFail(_throwErr)
  ->_getStreamFromTuple

let init = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().init()
  DpContainer.unsafeGetSceneRenderWorkDp().getInitPipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

let update = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().getUpdatePipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

let render = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().getRenderPipelineData()
  ->ParsePipelineData.parse
  ->_getStream
}

// TODO convert from js vo to dp do

let setSceneRenderWorkDp = dp => {
  DpContainer.setSceneRenderWorkDp(dp)
}

let setSceneGraphRepoDp = dp => {
  DpContainer.setSceneGraphRepoDp(dp)
}
