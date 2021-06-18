/* TypeScript file generated from PipelineDOTypeForJs.res by genType. */
/* eslint-disable import/first */


import type {Stream as $$stream} from 'most';

import type {sceneGraphRepoForMainWorker as ISceneGraphRepoForJs_sceneGraphRepoForMainWorker} from '../../src/repo/ISceneGraphRepoForJs.gen';

import type {sceneGraphRepoForNoWorker as ISceneGraphRepoForJs_sceneGraphRepoForNoWorker} from '../../src/repo/ISceneGraphRepoForJs.gen';

import type {sceneGraphRepoForRenderWorker as ISceneGraphRepoForJs_sceneGraphRepoForRenderWorker} from '../../src/repo/ISceneGraphRepoForJs.gen';

// tslint:disable-next-line:interface-over-type-literal
export type link = "merge" | "concat";

// tslint:disable-next-line:interface-over-type-literal
export type elementType = "job" | "group";

// tslint:disable-next-line:interface-over-type-literal
export type elementName = string;

// tslint:disable-next-line:interface-over-type-literal
export type element = { readonly name: elementName; readonly type_: elementType };

// tslint:disable-next-line:interface-over-type-literal
export type groupName = string;

// tslint:disable-next-line:interface-over-type-literal
export type group = {
  readonly name: groupName; 
  readonly link: link; 
  readonly elements: element[]
};

// tslint:disable-next-line:interface-over-type-literal
export type pipelineName = string;

// tslint:disable-next-line:interface-over-type-literal
export type pipelineData = {
  readonly name: pipelineName; 
  readonly groups: group[]; 
  readonly firstGroup: groupName
};

// tslint:disable-next-line:interface-over-type-literal
export type repoForNoWorker = { readonly sceneGraphRepo: ISceneGraphRepoForJs_sceneGraphRepoForNoWorker };

// tslint:disable-next-line:interface-over-type-literal
export type repoForMainWorker = { readonly sceneGraphRepo: ISceneGraphRepoForJs_sceneGraphRepoForMainWorker };

// tslint:disable-next-line:interface-over-type-literal
export type repoForRenderWorker = { readonly sceneGraphRepo: ISceneGraphRepoForJs_sceneGraphRepoForRenderWorker };

// tslint:disable-next-line:interface-over-type-literal
export type stream<a> = $$stream<a>;

// tslint:disable-next-line:interface-over-type-literal
export type execFuncForNoWorker = (_1:repoForNoWorker) => stream<void>;

// tslint:disable-next-line:interface-over-type-literal
export type execFuncForMainWorker = (_1:repoForMainWorker) => stream<void>;

// tslint:disable-next-line:interface-over-type-literal
export type execFuncForRenderWorker = (_1:repoForRenderWorker) => stream<void>;

// tslint:disable-next-line:interface-over-type-literal
export type pipelineStream = stream<void>;
