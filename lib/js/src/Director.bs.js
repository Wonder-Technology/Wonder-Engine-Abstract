'use strict';

var Most = require("most");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ListSt$WonderEngineAbstract = require("./structure/ListSt.bs.js");
var Result$WonderEngineAbstract = require("./structure/Result.bs.js");
var ArraySt$WonderEngineAbstract = require("./structure/ArraySt.bs.js");
var OptionSt$WonderEngineAbstract = require("./structure/OptionSt.bs.js");
var DpContainer$WonderEngineAbstract = require("./dependency/DpContainer.bs.js");

var _isFromEventStream = (function(stream){
    var source = stream.source;
    return !!source.event && !!source.source;
  });

function concatArray(streamArr) {
  var match = streamArr.length;
  if (match !== 0) {
    return ArraySt$WonderEngineAbstract.reduceOneParam(ArraySt$WonderEngineAbstract.sliceFrom(streamArr, 1), Caml_array.get(streamArr, 0), (function (stream1, stream2) {
                  _isFromEventStream(stream1) === true;
                  return stream1.concat(stream2);
                }));
  } else {
    return Most.just(1);
  }
}

var MostUtils = {
  _isFromEventStream: _isFromEventStream,
  concatArray: concatArray
};

function _findGroup(groupName, groups) {
  var group = ListSt$WonderEngineAbstract.getBy(groups, (function (param) {
          return param.name === groupName;
        }));
  if (group !== undefined) {
    return Result$WonderEngineAbstract.succeed(group);
  } else {
    return Result$WonderEngineAbstract.failWith("groupName:" + groupName + " not in groups");
  }
}

function _buildJobStream(execFunc) {
  var __x = Most.just(execFunc);
  var __x$1 = Most.flatMap((function (func) {
          return Curry._1(func, {
                      sceneGraphRepo: DpContainer$WonderEngineAbstract.unsafeGetSceneGraphRepoDp(undefined)
                    });
        }), __x);
  return Most.flatMap((function (result) {
                return Result$WonderEngineAbstract.either(result, (function (s) {
                              return Most.just(s);
                            }), (function (f) {
                              return Most.throwError(f);
                            }));
              }), __x$1);
}

function _buildJobStreams(param, groups, buildPipelineStreamFunc) {
  var pipelineName = param[0];
  return ListSt$WonderEngineAbstract.traverseReduceResultM(param[1], /* [] */0, (function (streams, param) {
                var name = param.name;
                if (param.type_) {
                  return Result$WonderEngineAbstract.mapSuccess(Result$WonderEngineAbstract.bind(_findGroup(name, groups), (function (group) {
                                    return Curry._3(buildPipelineStreamFunc, pipelineName, group, groups);
                                  })), (function (stream) {
                                return ListSt$WonderEngineAbstract.push(streams, stream);
                              }));
                } else {
                  return Result$WonderEngineAbstract.mapSuccess(OptionSt$WonderEngineAbstract.get(Curry._2(DpContainer$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getExecFunc, pipelineName, name)), (function (execFunc) {
                                return ListSt$WonderEngineAbstract.push(streams, _buildJobStream(execFunc));
                              }));
                }
              }));
}

function _buildPipelineStream(pipelineName, param, groups) {
  var link = param.link;
  return Result$WonderEngineAbstract.mapSuccess(_buildJobStreams([
                  pipelineName,
                  param.elements
                ], groups, _buildPipelineStream), (function (streams) {
                return (
                          link ? concatArray : (function (prim) {
                                return Most.mergeArray(prim);
                              })
                        )(ListSt$WonderEngineAbstract.toArray(streams));
              }));
}

function parse(param) {
  var groups = param.groups;
  var name = param.name;
  return Result$WonderEngineAbstract.mapSuccess(Result$WonderEngineAbstract.bind(_findGroup(param.firstGroup, groups), (function (group) {
                    return Result$WonderEngineAbstract.mapSuccess(_buildPipelineStream(name, group, groups), (function (pipelineStream) {
                                  return Most.map((function (param) {
                                                return Result$WonderEngineAbstract.succeed(undefined);
                                              }), pipelineStream);
                                }));
                  })), (function (stream) {
                return [
                        name,
                        stream
                      ];
              }));
}

var ParsePipelineData = {
  _findGroup: _findGroup,
  _buildJobStream: _buildJobStream,
  _buildJobStreams: _buildJobStreams,
  _buildPipelineStream: _buildPipelineStream,
  parse: parse
};

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
  Curry._1(DpContainer$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).init, undefined);
  var streamDataResult = parse(Curry._1(DpContainer$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getInitPipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

function update(param) {
  var streamDataResult = parse(Curry._1(DpContainer$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getUpdatePipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

function render(param) {
  var streamDataResult = parse(Curry._1(DpContainer$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getRenderPipelineData, undefined));
  return _getStreamFromTuple(Result$WonderEngineAbstract.handleFail(streamDataResult, _throwErr));
}

var setSceneRenderWorkDp = DpContainer$WonderEngineAbstract.setSceneRenderWorkDp;

var setSceneGraphRepoDp = DpContainer$WonderEngineAbstract.setSceneGraphRepoDp;

exports.MostUtils = MostUtils;
exports.ParsePipelineData = ParsePipelineData;
exports._getStreamFromTuple = _getStreamFromTuple;
exports._throwErr = _throwErr;
exports._getStream = _getStream;
exports.init = init;
exports.update = update;
exports.render = render;
exports.setSceneRenderWorkDp = setSceneRenderWorkDp;
exports.setSceneGraphRepoDp = setSceneGraphRepoDp;
/* most Not a pure module */
