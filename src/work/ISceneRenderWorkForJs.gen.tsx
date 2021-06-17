/* TypeScript file generated from ISceneRenderWorkForJs.res by genType. */
/* eslint-disable import/first */


import type {execFunc as PipelineDOTypeForJs_execFunc} from '../../src/data/PipelineDOTypeForJs.gen';

import type {pipelineData as PipelineDOTypeForJs_pipelineData} from '../../src/data/PipelineDOTypeForJs.gen';

// tslint:disable-next-line:interface-over-type-literal
export type init = () => void;

// tslint:disable-next-line:interface-over-type-literal
export type getInitPipelineData = () => PipelineDOTypeForJs_pipelineData;

// tslint:disable-next-line:interface-over-type-literal
export type getUpdatePipelineData = () => PipelineDOTypeForJs_pipelineData;

// tslint:disable-next-line:interface-over-type-literal
export type getRenderPipelineData = () => PipelineDOTypeForJs_pipelineData;

// tslint:disable-next-line:interface-over-type-literal
export type getExecFunc = (_1:string, _2:string) => (null | undefined | PipelineDOTypeForJs_execFunc);

// tslint:disable-next-line:interface-over-type-literal
export type sceneRenderWork = {
  readonly init: init; 
  readonly getExecFunc: getExecFunc; 
  readonly getInitPipelineData: getInitPipelineData; 
  readonly getUpdatePipelineData: getUpdatePipelineData; 
  readonly getRenderPipelineData: getRenderPipelineData
};
