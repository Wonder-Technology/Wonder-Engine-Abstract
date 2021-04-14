type init = unit => unit

type getInitPipelineData = unit => PipelineDOType.pipelineData

type getUpdatePipelineData = unit => PipelineDOType.pipelineData

type getRenderPipelineData = unit => PipelineDOType.pipelineData

type getExecFunc = (string, string) => option<PipelineDOType.execFunc>

type sceneRenderWork = {
  init: init,
  getExecFunc: getExecFunc,
  getInitPipelineData: getInitPipelineData,
  getUpdatePipelineData: getUpdatePipelineData,
  getRenderPipelineData: getRenderPipelineData,
}
