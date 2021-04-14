'use strict';

var OptionSt$WonderEngineAbstract = require("../structure/OptionSt.bs.js");

var dpContainer = {
  sceneRenderWork: undefined,
  sceneGraphRepo: undefined
};

function unsafeGetSceneRenderWorkDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneRenderWork);
}

function setSceneRenderWorkDp(dp) {
  dpContainer.sceneRenderWork = dp;
  
}

function unsafeGetSceneGraphRepoDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneGraphRepo);
}

function setSceneGraphRepoDp(dp) {
  dpContainer.sceneGraphRepo = dp;
  
}

exports.dpContainer = dpContainer;
exports.unsafeGetSceneRenderWorkDp = unsafeGetSceneRenderWorkDp;
exports.setSceneRenderWorkDp = setSceneRenderWorkDp;
exports.unsafeGetSceneGraphRepoDp = unsafeGetSceneGraphRepoDp;
exports.setSceneGraphRepoDp = setSceneGraphRepoDp;
/* No side effect */
