'use strict';

var Most = require("most");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ListSt$WonderEngineAbstract = require("../structure/ListSt.bs.js");
var ArraySt$WonderEngineAbstract = require("../structure/ArraySt.bs.js");
var OptionSt$WonderEngineAbstract = require("../structure/OptionSt.bs.js");
var Exception$WonderEngineAbstract = require("../structure/Exception.bs.js");

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
  var group = ListSt$WonderEngineAbstract.getBy(ListSt$WonderEngineAbstract.fromArray(groups), (function (param) {
          return param.name === groupName;
        }));
  if (group !== undefined) {
    return group;
  } else {
    return Exception$WonderEngineAbstract.throwErr(Exception$WonderEngineAbstract.buildErr("groupName:" + groupName + " not in groups"));
  }
}

function _buildJobStream(execFunc, buildRepoFunc) {
  var __x = Most.just(execFunc);
  return Most.flatMap((function (func) {
                return Curry._1(func, Curry._1(buildRepoFunc, undefined));
              }), __x);
}

function _buildJobStreams(param, param$1, groups) {
  var pipelineName = param$1[0];
  var buildRepoFunc = param[2];
  var getExecFunc = param[1];
  var buildPipelineStreamFunc = param[0];
  return ListSt$WonderEngineAbstract.reduce(ListSt$WonderEngineAbstract.fromArray(param$1[1]), /* [] */0, (function (streams, param) {
                var name = param.name;
                if (param.type_ === "group") {
                  var group = _findGroup(name, groups);
                  var stream = Curry._4(buildPipelineStreamFunc, [
                        getExecFunc,
                        buildRepoFunc
                      ], pipelineName, group, groups);
                  return ListSt$WonderEngineAbstract.push(streams, stream);
                }
                var execFunc = OptionSt$WonderEngineAbstract.unsafeGet(Caml_option.nullable_to_opt(Curry._2(getExecFunc, pipelineName, name)));
                return ListSt$WonderEngineAbstract.push(streams, _buildJobStream(execFunc, buildRepoFunc));
              }));
}

function _buildPipelineStream(param, pipelineName, param$1, groups) {
  var streams = _buildJobStreams([
        _buildPipelineStream,
        param[0],
        param[1]
      ], [
        pipelineName,
        param$1.elements
      ], groups);
  return (
            param$1.link === "merge" ? (function (prim) {
                  return Most.mergeArray(prim);
                }) : concatArray
          )(ListSt$WonderEngineAbstract.toArray(streams));
}

function parse(param, param$1) {
  var groups = param$1.groups;
  var name = param$1.name;
  var group = _findGroup(param$1.firstGroup, groups);
  return [
          name,
          _buildPipelineStream([
                param[0],
                param[1]
              ], name, group, groups)
        ];
}

var ParsePipelineData = {
  _findGroup: _findGroup,
  _buildJobStream: _buildJobStream,
  _buildJobStreams: _buildJobStreams,
  _buildPipelineStream: _buildPipelineStream,
  parse: parse
};

exports.MostUtils = MostUtils;
exports.ParsePipelineData = ParsePipelineData;
/* most Not a pure module */
