/* TypeScript file generated from PipelineDOTypeForJs.res by genType. */
/* eslint-disable import/first */


import {Stream as $$stream} from 'most';

import {sceneGraphRepo as ISceneGraphRepoForJs_sceneGraphRepo} from '../../src/repo/ISceneGraphRepoForJs.gen';

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
export type repo = { readonly sceneGraphRepo: ISceneGraphRepoForJs_sceneGraphRepo };

// tslint:disable-next-line:interface-over-type-literal
export type stream<a> = $$stream<a>;

// tslint:disable-next-line:interface-over-type-literal
export type execFunc = (_1:repo) => stream<void>;

// tslint:disable-next-line:interface-over-type-literal
export type pipelineStream = stream<void>;
