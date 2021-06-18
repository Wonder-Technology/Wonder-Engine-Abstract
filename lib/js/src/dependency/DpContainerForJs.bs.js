'use strict';

var OptionSt$WonderEngineAbstract = require("../structure/OptionSt.bs.js");

var dpContainer = {
  sceneRenderWorkForNoWorker: undefined,
  sceneRenderWorkForMainWorker: undefined,
  sceneRenderWorkForRenderWorker: undefined,
  sceneGraphRepoForNoWorker: undefined,
  sceneGraphRepoForMainWorker: undefined,
  sceneGraphRepoForRenderWorker: undefined
};

function unsafeGetSceneRenderWorkForNoWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneRenderWorkForNoWorker);
}

function setSceneRenderWorkForNoWorkerDp(dp) {
  dpContainer.sceneRenderWorkForNoWorker = dp;
  
}

function unsafeGetSceneRenderWorkForMainWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneRenderWorkForMainWorker);
}

function setSceneRenderWorkForMainWorkerDp(dp) {
  dpContainer.sceneRenderWorkForMainWorker = dp;
  
}

function unsafeGetSceneRenderWorkForRenderWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneRenderWorkForRenderWorker);
}

function setSceneRenderWorkForRenderWorkerDp(dp) {
  dpContainer.sceneRenderWorkForRenderWorker = dp;
  
}

function unsafeGetSceneGraphRepoForNoWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneGraphRepoForNoWorker);
}

function setSceneGraphRepoForNoWorkerDp(dp) {
  dpContainer.sceneGraphRepoForNoWorker = dp;
  
}

function unsafeGetSceneGraphRepoForMainWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneGraphRepoForMainWorker);
}

function setSceneGraphRepoForMainWorkerDp(dp) {
  dpContainer.sceneGraphRepoForMainWorker = dp;
  
}

function unsafeGetSceneGraphRepoForRenderWorkerDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneGraphRepoForRenderWorker);
}

function setSceneGraphRepoForRenderWorkerDp(dp) {
  dpContainer.sceneGraphRepoForRenderWorker = dp;
  
}

exports.dpContainer = dpContainer;
exports.unsafeGetSceneRenderWorkForNoWorkerDp = unsafeGetSceneRenderWorkForNoWorkerDp;
exports.setSceneRenderWorkForNoWorkerDp = setSceneRenderWorkForNoWorkerDp;
exports.unsafeGetSceneRenderWorkForMainWorkerDp = unsafeGetSceneRenderWorkForMainWorkerDp;
exports.setSceneRenderWorkForMainWorkerDp = setSceneRenderWorkForMainWorkerDp;
exports.unsafeGetSceneRenderWorkForRenderWorkerDp = unsafeGetSceneRenderWorkForRenderWorkerDp;
exports.setSceneRenderWorkForRenderWorkerDp = setSceneRenderWorkForRenderWorkerDp;
exports.unsafeGetSceneGraphRepoForNoWorkerDp = unsafeGetSceneGraphRepoForNoWorkerDp;
exports.setSceneGraphRepoForNoWorkerDp = setSceneGraphRepoForNoWorkerDp;
exports.unsafeGetSceneGraphRepoForMainWorkerDp = unsafeGetSceneGraphRepoForMainWorkerDp;
exports.setSceneGraphRepoForMainWorkerDp = setSceneGraphRepoForMainWorkerDp;
exports.unsafeGetSceneGraphRepoForRenderWorkerDp = unsafeGetSceneGraphRepoForRenderWorkerDp;
exports.setSceneGraphRepoForRenderWorkerDp = setSceneGraphRepoForRenderWorkerDp;
/* No side effect */
