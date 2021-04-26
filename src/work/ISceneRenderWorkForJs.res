type init = unit => unit

type getInitPipelineData = unit => PipelineDOTypeForJs.pipelineData

type getUpdatePipelineData = unit => PipelineDOTypeForJs.pipelineData

type getRenderPipelineData = unit => PipelineDOTypeForJs.pipelineData

type getExecFunc = (string, string) => Js.Nullable.t<PipelineDOTypeForJs.execFunc>

type sceneRenderWork = {
  init: init,
  getExecFunc: getExecFunc,
  getInitPipelineData: getInitPipelineData,
  getUpdatePipelineData: getUpdatePipelineData,
  getRenderPipelineData: getRenderPipelineData,
}
