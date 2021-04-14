type t = {
  mutable sceneRenderWork: option<ISceneRenderWork.sceneRenderWork>,
  mutable sceneGraphRepo: option<ISceneGraphRepo.sceneGraphRepo>,
  // mutable webgpuCore: option<IWebGPUCoreDp.webgpuCore>,
}

let dpContainer = {
  sceneRenderWork: None,
  sceneGraphRepo: None,
  // webgpuCore: None,
}

let unsafeGetSceneRenderWorkDp = () => {
  dpContainer.sceneRenderWork->OptionSt.unsafeGet
}

let setSceneRenderWorkDp = dp => {
  dpContainer.sceneRenderWork = dp->Some

  ()
}

let unsafeGetSceneGraphRepoDp = () => {
  dpContainer.sceneGraphRepo->OptionSt.unsafeGet
}

let setSceneGraphRepoDp = dp => {
  dpContainer.sceneGraphRepo = dp->Some

  ()
}

// let unsafeGetWebGPUCoreDp = () => {
//   dpContainer.webgpuCore->OptionSt.unsafeGet
// }

// let setWebGPUCoreDp = dp => {
//   dpContainer.webgpuCore = dp->Some

//   ()
// }
