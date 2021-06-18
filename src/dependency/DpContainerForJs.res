type t = {
  mutable sceneRenderWorkForNoWorker: option<ISceneRenderWorkForJs.sceneRenderWorkForNoWorker>,
  mutable sceneRenderWorkForMainWorker: option<ISceneRenderWorkForJs.sceneRenderWorkForMainWorker>,
  mutable sceneRenderWorkForRenderWorker: option<
    ISceneRenderWorkForJs.sceneRenderWorkForRenderWorker,
  >,
  mutable sceneGraphRepoForNoWorker: option<ISceneGraphRepoForJs.sceneGraphRepoForNoWorker>,
  mutable sceneGraphRepoForMainWorker: option<ISceneGraphRepoForJs.sceneGraphRepoForMainWorker>,
  mutable sceneGraphRepoForRenderWorker: option<ISceneGraphRepoForJs.sceneGraphRepoForRenderWorker>,
  // mutable webgpuCore: option<IWebGPUCoreDp.webgpuCore>,
}

let dpContainer = {
  sceneRenderWorkForNoWorker: None,
  sceneRenderWorkForMainWorker: None,
  sceneRenderWorkForRenderWorker: None,
  sceneGraphRepoForNoWorker: None,
  sceneGraphRepoForMainWorker: None,
  sceneGraphRepoForRenderWorker: None,
  // webgpuCore: None,
}

let unsafeGetSceneRenderWorkForNoWorkerDp = () => {
  dpContainer.sceneRenderWorkForNoWorker->OptionSt.unsafeGet
}

let setSceneRenderWorkForNoWorkerDp = dp => {
  dpContainer.sceneRenderWorkForNoWorker = dp->Some

  ()
}

let unsafeGetSceneRenderWorkForMainWorkerDp = () => {
  dpContainer.sceneRenderWorkForMainWorker->OptionSt.unsafeGet
}

let setSceneRenderWorkForMainWorkerDp = dp => {
  dpContainer.sceneRenderWorkForMainWorker = dp->Some

  ()
}

let unsafeGetSceneRenderWorkForRenderWorkerDp = () => {
  dpContainer.sceneRenderWorkForRenderWorker->OptionSt.unsafeGet
}

let setSceneRenderWorkForRenderWorkerDp = dp => {
  dpContainer.sceneRenderWorkForRenderWorker = dp->Some

  ()
}

let unsafeGetSceneGraphRepoForNoWorkerDp = () => {
  dpContainer.sceneGraphRepoForNoWorker->OptionSt.unsafeGet
}

let setSceneGraphRepoForNoWorkerDp = dp => {
  dpContainer.sceneGraphRepoForNoWorker = dp->Some

  ()
}

let unsafeGetSceneGraphRepoForMainWorkerDp = () => {
  dpContainer.sceneGraphRepoForMainWorker->OptionSt.unsafeGet
}

let setSceneGraphRepoForMainWorkerDp = dp => {
  dpContainer.sceneGraphRepoForMainWorker = dp->Some

  ()
}

let unsafeGetSceneGraphRepoForRenderWorkerDp = () => {
  dpContainer.sceneGraphRepoForRenderWorker->OptionSt.unsafeGet
}

let setSceneGraphRepoForRenderWorkerDp = dp => {
  dpContainer.sceneGraphRepoForRenderWorker = dp->Some

  ()
}

// let unsafeGetWebGPUCoreDp = () => {
//   dpContainer.webgpuCore->OptionSt.unsafeGet
// }

// let setWebGPUCoreDp = dp => {
//   dpContainer.webgpuCore = dp->Some

//   ()
// }
