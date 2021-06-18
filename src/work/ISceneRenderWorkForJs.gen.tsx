/* TypeScript file generated from ISceneRenderWorkForJs.res by genType. */
/* eslint-disable import/first */


import type {execFuncForMainWorker as PipelineDOTypeForJs_execFuncForMainWorker} from '../../src/data/PipelineDOTypeForJs.gen';

import type {execFuncForNoWorker as PipelineDOTypeForJs_execFuncForNoWorker} from '../../src/data/PipelineDOTypeForJs.gen';

import type {execFuncForRenderWorker as PipelineDOTypeForJs_execFuncForRenderWorker} from '../../src/data/PipelineDOTypeForJs.gen';

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
export type getExecFuncForNoWorker = (_1:string, _2:string) => (null | undefined | PipelineDOTypeForJs_execFuncForNoWorker);

// tslint:disable-next-line:interface-over-type-literal
export type getExecFuncForMainWorker = (_1:string, _2:string) => (null | undefined | PipelineDOTypeForJs_execFuncForMainWorker);

// tslint:disable-next-line:interface-over-type-literal
export type getExecFuncForRenderWorker = (_1:string, _2:string) => (null | undefined | PipelineDOTypeForJs_execFuncForRenderWorker);

// tslint:disable-next-line:interface-over-type-literal
export type sceneRenderWorkForNoWorker = {
  readonly init: init; 
  readonly getExecFunc: getExecFuncForNoWorker; 
  readonly getInitPipelineData: getInitPipelineData; 
  readonly getUpdatePipelineData: getUpdatePipelineData; 
  readonly getRenderPipelineData: getRenderPipelineData
};

// tslint:disable-next-line:interface-over-type-literal
export type sceneRenderWorkForMainWorker = {
  readonly init: init; 
  readonly getExecFunc: getExecFuncForMainWorker; 
  readonly getInitPipelineData: getInitPipelineData; 
  readonly getUpdatePipelineData: getUpdatePipelineData; 
  readonly getRenderPipelineData: getRenderPipelineData
};

// tslint:disable-next-line:interface-over-type-literal
export type sceneRenderWorkForRenderWorker = {
  readonly init: init; 
  readonly getExecFunc: getExecFuncForRenderWorker; 
  readonly getInitPipelineData: getInitPipelineData; 
  readonly getRenderPipelineData: getRenderPipelineData
};
