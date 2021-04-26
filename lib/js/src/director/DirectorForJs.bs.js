'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Result$WonderEngineAbstract = require("../structure/Result.bs.js");
var DpContainerForJs$WonderEngineAbstract = require("../dependency/DpContainerForJs.bs.js");
var DirectorUtilsForJs$WonderEngineAbstract = require("./DirectorUtilsForJs.bs.js");

function _getStreamFromTuple(param) {
  return param[1];
}

var _throwErr = ((err) => {
    throw err;
});

function _getStream(streamDataResult) {
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

function init(param) {
  Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).init, undefined);
  var streamDataResult = DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getInitPipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

function update(param) {
  var streamDataResult = DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getUpdatePipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

function render(param) {
  var streamDataResult = DirectorUtilsForJs$WonderEngineAbstract.ParsePipelineData.parse(Curry._1(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getRenderPipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

var setSceneRenderWorkDp = DpContainerForJs$WonderEngineAbstract.setSceneRenderWorkDp;

var setSceneGraphRepoDp = DpContainerForJs$WonderEngineAbstract.setSceneGraphRepoDp;

exports._getStreamFromTuple = _getStreamFromTuple;
exports._throwErr = _throwErr;
exports._getStream = _getStream;
exports.init = init;
exports.update = update;
exports.render = render;
exports.setSceneRenderWorkDp = setSceneRenderWorkDp;
exports.setSceneGraphRepoDp = setSceneGraphRepoDp;
/* DirectorUtilsForJs-WonderEngineAbstract Not a pure module */
