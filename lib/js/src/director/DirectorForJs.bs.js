'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var DpContainerForJs$WonderEngineAbstract = require("../dependency/DpContainerForJs.bs.js");
var DirectorUtilsForJs$WonderEngineAbstract = require("./DirectorUtilsForJs.bs.js");

function _getStreamFromTuple(param) {
  return param[1];
}

var _throwErr = ((err) => {
    throw err;
});

var _getStream = _getStreamFromTuple;

function prepareForNoWorker(canvas, configData, globalTempData) {
  Curry._3(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForNoWorkerDp(undefined).init, canvas, configData, globalTempData);
  return Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).init, undefined);
}

function prepareForMainWorker(canvas, configData, globalTempData) {
  Curry._3(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForMainWorkerDp(undefined).init, canvas, configData, globalTempData);
  return Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).init, undefined);
}

function prepareForRenderWorker(isDebug, sharedArrayBufferData) {
  Curry._2(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForRenderWorkerDp(undefined).init, isDebug, sharedArrayBufferData);
  return Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForRenderWorkerDp(undefined).init, undefined);
}

function initForNoWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForNoWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getInitPipelineData, undefined)));
}

function initForMainWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForMainWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getInitPipelineData, undefined)));
}

function initForRenderWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForRenderWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForRenderWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForRenderWorkerDp(undefined).getInitPipelineData, undefined)));
}

function updateForNoWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForNoWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getUpdatePipelineData, undefined)));
}

function updateForMainWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForMainWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getUpdatePipelineData, undefined)));
}

function renderForNoWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForNoWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForNoWorkerDp(undefined).getRenderPipelineData, undefined)));
}

function renderForMainWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForMainWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForMainWorkerDp(undefined).getRenderPipelineData, undefined)));
}

function renderForRenderWorker(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse([
                  DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForRenderWorkerDp(undefined).getExecFunc,
                  (function (param) {
                      return {
                              sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForRenderWorkerDp(undefined)
                            };
                    })
                ], Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkForRenderWorkerDp(undefined).getRenderPipelineData, undefined)));
}

var setSceneRenderWorkForNoWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkForNoWorkerDp;

var setSceneRenderWorkForMainWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkForMainWorkerDp;

var setSceneRenderWorkForRenderWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkForRenderWorkerDp;

function unsafeGetSceneGraphRepoForNoWorkerDp(param) {
  return DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForNoWorkerDp(undefined);
}

var setSceneGraphRepoForNoWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoForNoWorkerDp;

function unsafeGetSceneGraphRepoForMainWorkerDp(param) {
  return DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForMainWorkerDp(undefined);
}

var setSceneGraphRepoForMainWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoForMainWorkerDp;

function unsafeGetSceneGraphRepoForRenderWorkerDp(param) {
  return DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoForRenderWorkerDp(undefined);
}

var setSceneGraphRepoForRenderWorkerDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoForRenderWorkerDp;

exports._getStreamFromTuple = _getStreamFromTuple;
exports._throwErr = _throwErr;
exports._getStream = _getStream;
exports.prepareForNoWorker = prepareForNoWorker;
exports.prepareForMainWorker = prepareForMainWorker;
exports.prepareForRenderWorker = prepareForRenderWorker;
exports.initForNoWorker = initForNoWorker;
exports.initForMainWorker = initForMainWorker;
exports.initForRenderWorker = initForRenderWorker;
exports.updateForNoWorker = updateForNoWorker;
exports.updateForMainWorker = updateForMainWorker;
exports.renderForNoWorker = renderForNoWorker;
exports.renderForMainWorker = renderForMainWorker;
exports.renderForRenderWorker = renderForRenderWorker;
exports.setSceneRenderWorkForNoWorkerDp = setSceneRenderWorkForNoWorkerDp;
exports.setSceneRenderWorkForMainWorkerDp = setSceneRenderWorkForMainWorkerDp;
exports.setSceneRenderWorkForRenderWorkerDp = setSceneRenderWorkForRenderWorkerDp;
exports.unsafeGetSceneGraphRepoForNoWorkerDp = unsafeGetSceneGraphRepoForNoWorkerDp;
exports.setSceneGraphRepoForNoWorkerDp = setSceneGraphRepoForNoWorkerDp;
exports.unsafeGetSceneGraphRepoForMainWorkerDp = unsafeGetSceneGraphRepoForMainWorkerDp;
exports.setSceneGraphRepoForMainWorkerDp = setSceneGraphRepoForMainWorkerDp;
exports.unsafeGetSceneGraphRepoForRenderWorkerDp = unsafeGetSceneGraphRepoForRenderWorkerDp;
exports.setSceneGraphRepoForRenderWorkerDp = setSceneGraphRepoForRenderWorkerDp;
/* DirectorUtilsForJs-WonderEngineAbstract Not a pure module */
