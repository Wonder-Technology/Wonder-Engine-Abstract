type init = unit => unit

type getInitPipelineData = unit => PipelineDOTypeForJs.pipelineData

type getUpdatePipelineData = unit => PipelineDOTypeForJs.pipelineData

type getRenderPipelineData = unit => PipelineDOTypeForJs.pipelineData

type getExecFuncForNoWorker = (
  string,
  string,
) => Js.Nullable.t<PipelineDOTypeForJs.execFuncForNoWorker>

type getExecFuncForMainWorker = (
  string,
  string,
) => Js.Nullable.t<PipelineDOTypeForJs.execFuncForMainWorker>

type getExecFuncForRenderWorker = (
  string,
  string,
) => Js.Nullable.t<PipelineDOTypeForJs.execFuncForRenderWorker>

export type sceneRenderWorkForNoWorker = {
  init: init,
  getExecFunc: getExecFuncForNoWorker,
  getInitPipelineData: getInitPipelineData,
  getUpdatePipelineData: getUpdatePipelineData,
  getRenderPipelineData: getRenderPipelineData,
}

export type sceneRenderWorkForMainWorker = {
  init: init,
  getExecFunc: getExecFuncForMainWorker,
  getInitPipelineData: getInitPipelineData,
  getUpdatePipelineData: getUpdatePipelineData,
  getRenderPipelineData: getRenderPipelineData,
}

export type sceneRenderWorkForRenderWorker = {
  init: init,
  getExecFunc: getExecFuncForRenderWorker,
  getInitPipelineData: getInitPipelineData,
  getRenderPipelineData: getRenderPipelineData,
}
