open DirectorUtils;

let init = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().init()
  DpContainer.unsafeGetSceneRenderWorkDp().getInitPipelineData()->ParsePipelineData.parse
}

let update = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().getUpdatePipelineData()->ParsePipelineData.parse
}

let render = () => {
  DpContainer.unsafeGetSceneRenderWorkDp().getRenderPipelineData()->ParsePipelineData.parse
}

let setSceneRenderWorkDp = dp => {
  DpContainer.setSceneRenderWorkDp(dp)
}

let setSceneGraphRepoDp = dp => {
  DpContainer.setSceneGraphRepoDp(dp)
}