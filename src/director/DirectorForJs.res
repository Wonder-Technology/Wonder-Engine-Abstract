open DirectorUtilsForJs

let _getStreamFromTuple = ((_, pipelineStream)) => pipelineStream

let _throwErr = %bs.raw(`
(err) => {
    throw err;
}
`)

let _getStream = streamDataResult => streamDataResult->_getStreamFromTuple
// TODO use Promise.reject instead of throw!
// ->Result.handleFail(_throwErr)

let prepareForNoWorker = (canvas, configData, globalTempData) => {
  DpContainerForJs.unsafeGetSceneGraphRepoForNoWorkerDp().init(canvas, configData, globalTempData)
  DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().init()
}

let prepareForMainWorker = (canvas, configData, globalTempData) => {
  DpContainerForJs.unsafeGetSceneGraphRepoForMainWorkerDp().init(canvas, configData, globalTempData)
  DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().init()
}

let prepareForRenderWorker = (isDebug, sharedArrayBufferData) => {
  DpContainerForJs.unsafeGetSceneGraphRepoForRenderWorkerDp().init(isDebug, sharedArrayBufferData)
  DpContainerForJs.unsafeGetSceneRenderWorkForRenderWorkerDp().init()
}

let initForNoWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForNoWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForNoWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getInitPipelineData(),
  )
  ->_getStream
}

let initForMainWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForMainWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForMainWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getInitPipelineData(),
  )
  ->_getStream
}

let initForRenderWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForRenderWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForRenderWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForRenderWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForRenderWorkerDp().getInitPipelineData(),
  )
  ->_getStream
}

let updateForNoWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForNoWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForNoWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getUpdatePipelineData(),
  )
  ->_getStream
}

let updateForMainWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForMainWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForMainWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getUpdatePipelineData(),
  )
  ->_getStream
}

let renderForNoWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForNoWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForNoWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForNoWorkerDp().getRenderPipelineData(),
  )
  ->_getStream
}

let renderForMainWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForMainWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForMainWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForMainWorkerDp().getRenderPipelineData(),
  )
  ->_getStream
}

let renderForRenderWorker = () => {
  (
    DpContainerForJs.unsafeGetSceneRenderWorkForRenderWorkerDp().getExecFunc,
    (): PipelineDOTypeForJs.repoForRenderWorker => {
      sceneGraphRepo: DpContainerForJs.unsafeGetSceneGraphRepoForRenderWorkerDp(),
    },
  )
  ->ParsePipelineData.parse(
    DpContainerForJs.unsafeGetSceneRenderWorkForRenderWorkerDp().getRenderPipelineData(),
  )
  ->_getStream
}

// let unsafeGetSceneRenderWorkDp = () => {
//   DpContainerForJs.unsafeGetSceneRenderWorkDp()
// }

let setSceneRenderWorkForNoWorkerDp = dp => {
  DpContainerForJs.setSceneRenderWorkForNoWorkerDp(dp)
}

let setSceneRenderWorkForMainWorkerDp = dp => {
  DpContainerForJs.setSceneRenderWorkForMainWorkerDp(dp)
}

let setSceneRenderWorkForRenderWorkerDp = dp => {
  DpContainerForJs.setSceneRenderWorkForRenderWorkerDp(dp)
}

let unsafeGetSceneGraphRepoForNoWorkerDp = () => {
  DpContainerForJs.unsafeGetSceneGraphRepoForNoWorkerDp()
}

let setSceneGraphRepoForNoWorkerDp = dp => {
  DpContainerForJs.setSceneGraphRepoForNoWorkerDp(dp)
}

let unsafeGetSceneGraphRepoForMainWorkerDp = () => {
  DpContainerForJs.unsafeGetSceneGraphRepoForMainWorkerDp()
}

let setSceneGraphRepoForMainWorkerDp = dp => {
  DpContainerForJs.setSceneGraphRepoForMainWorkerDp(dp)
}

let unsafeGetSceneGraphRepoForRenderWorkerDp = () => {
  DpContainerForJs.unsafeGetSceneGraphRepoForRenderWorkerDp()
}

let setSceneGraphRepoForRenderWorkerDp = dp => {
  DpContainerForJs.setSceneGraphRepoForRenderWorkerDp(dp)
}
