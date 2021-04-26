

import * as Most from "most";
import * as Curry from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Caml_array from "../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Caml_option from "../../../../node_modules/bs-platform/lib/es6/caml_option.js";
import * as ListSt$WonderEngineAbstract from "../structure/ListSt.bs.js";
import * as ArraySt$WonderEngineAbstract from "../structure/ArraySt.bs.js";
import * as OptionSt$WonderEngineAbstract from "../structure/OptionSt.bs.js";
import * as Exception$WonderEngineAbstract from "../structure/Exception.bs.js";
import * as DpContainerForJs$WonderEngineAbstract from "../dependency/DpContainerForJs.bs.js";

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

function _buildJobStream(execFunc) {
  var __x = Most.just(execFunc);
  return Most.flatMap((function (func) {
                return Curry._1(func, {
                            sceneGraphRepo: DpContainerForJs$WonderEngineAbstract.unsafeGetSceneGraphRepoDp(undefined)
                          });
              }), __x);
}

function _buildJobStreams(param, groups, buildPipelineStreamFunc) {
  var pipelineName = param[0];
  return ListSt$WonderEngineAbstract.reduce(ListSt$WonderEngineAbstract.fromArray(param[1]), /* [] */0, (function (streams, param) {
                var name = param.name;
                if (param.type_ === "group") {
                  var group = _findGroup(name, groups);
                  var stream = Curry._3(buildPipelineStreamFunc, pipelineName, group, groups);
                  return ListSt$WonderEngineAbstract.push(streams, stream);
                }
                var execFunc = OptionSt$WonderEngineAbstract.unsafeGet(Caml_option.nullable_to_opt(Curry._2(DpContainerForJs$WonderEngineAbstract.unsafeGetSceneRenderWorkDp(undefined).getExecFunc, pipelineName, name)));
                return ListSt$WonderEngineAbstract.push(streams, _buildJobStream(execFunc));
              }));
}

function _buildPipelineStream(pipelineName, param, groups) {
  var streams = _buildJobStreams([
        pipelineName,
        param.elements
      ], groups, _buildPipelineStream);
  return (
            param.link === "merge" ? (function (prim) {
                  return Most.mergeArray(prim);
                }) : concatArray
          )(ListSt$WonderEngineAbstract.toArray(streams));
}

function parse(param) {
  var groups = param.groups;
  var name = param.name;
  var group = _findGroup(param.firstGroup, groups);
  return [
          name,
          _buildPipelineStream(name, group, groups)
        ];
}

var ParsePipelineData = {
  _findGroup: _findGroup,
  _buildJobStream: _buildJobStream,
  _buildJobStreams: _buildJobStreams,
  _buildPipelineStream: _buildPipelineStream,
  parse: parse
};

export {
  MostUtils ,
  ParsePipelineData ,
  
}
/* most Not a pure module */
