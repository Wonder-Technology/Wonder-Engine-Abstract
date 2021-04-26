

import * as Curry from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as DpContainerForJs$WonderEngineAbstract from "../dependency/DpContainerForJs.bs.js";
import * as DirectorUtilsForJs$WonderEngineAbstract from "./DirectorUtilsForJs.bs.js";

function _getStreamFromTuple(param) {
  return param[1];
}

var _throwErr = ((err) => {
    throw err;
});

var _getStream = _getStreamFromTuple;

function init(param) {
  Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).init, undefined);
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getInitPipelineData, undefined)));
}

function update(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getUpdatePipelineData, undefined)));
}

function render(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getRenderPipelineData, undefined)));
}

var setSceneRenderWorkDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkDp;

var setSceneGraphRepoDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoDp;

export {
  _getStreamFromTuple ,
  _throwErr ,
  _getStream ,
  init ,
  update ,
  render ,
  setSceneRenderWorkDp ,
  setSceneGraphRepoDp ,
  
}
/* DirectorUtilsForJs-WonderEngineAbstract Not a pure module */
