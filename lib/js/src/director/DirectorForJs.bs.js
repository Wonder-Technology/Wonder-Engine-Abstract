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

function prepare(canvas, configData, globalTempData) {
  Curry._3(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoDp(undefined).init, canvas, configData, globalTempData);
  return Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).init, undefined);
}

function init(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getInitPipelineData, undefined)));
}

function update(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getUpdatePipelineData, undefined)));
}

function render(param) {
  return _getStreamFromTuple(DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getRenderPipelineData, undefined)));
}

var setSceneRenderWorkDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkDp;

function unsafeGetSceneGraphRepoDp(param) {
  return DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoDp(undefined);
}

var setSceneGraphRepoDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoDp;

exports._getStreamFromTuple = _getStreamFromTuple;
exports._throwErr = _throwErr;
exports._getStream = _getStream;
exports.prepare = prepare;
exports.init = init;
exports.update = update;
exports.render = render;
exports.setSceneRenderWorkDp = setSceneRenderWorkDp;
exports.unsafeGetSceneGraphRepoDp = unsafeGetSceneGraphRepoDp;
exports.setSceneGraphRepoDp = setSceneGraphRepoDp;
/* DirectorUtilsForJs-WonderEngineAbstract Not a pure module */
