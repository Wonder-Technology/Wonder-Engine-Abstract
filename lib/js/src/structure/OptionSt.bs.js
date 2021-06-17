'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Result$WonderEngineAbstract = require("./Result.bs.js");

function unsafeGet(prim) {
  return prim;
}

function buildFailResult(param) {
  return Result$WonderEngineAbstract.failWith("data not exist in option data");
}

function get(optionData) {
  if (optionData !== undefined) {
    return Result$WonderEngineAbstract.succeed(Caml_option.valFromOption(optionData));
  } else {
    return Result$WonderEngineAbstract.failWith("data not exist in option data");
  }
}

function fromNullable(optionData) {
  if (optionData == null) {
    return ;
  } else {
    return Caml_option.some(optionData);
  }
}

function forEachResult(optionData, func) {
  if (optionData !== undefined) {
    return Curry._1(func, Caml_option.valFromOption(optionData));
  } else {
    return Result$WonderEngineAbstract.succeed(undefined);
  }
}

function sequenceResultM(optionData) {
  if (optionData !== undefined) {
    return Result$WonderEngineAbstract.mapSuccess(optionData, (function (value) {
                  return Caml_option.some(value);
                }));
  } else {
    return Result$WonderEngineAbstract.failWith("data not exist in option data");
  }
}

function open_(optionOptionData) {
  if (optionOptionData !== undefined) {
    return Caml_option.valFromOption(optionOptionData);
  }
  
}

var getExn = Belt_Option.getExn;

var getWithDefault = Belt_Option.getWithDefault;

var isSome = Belt_Option.isSome;

var map = Belt_Option.map;

var flatMap = Belt_Option.flatMap;

exports.unsafeGet = unsafeGet;
exports.getExn = getExn;
exports.buildFailResult = buildFailResult;
exports.get = get;
exports.getWithDefault = getWithDefault;
exports.isSome = isSome;
exports.map = map;
exports.flatMap = flatMap;
exports.fromNullable = fromNullable;
exports.forEachResult = forEachResult;
exports.sequenceResultM = sequenceResultM;
exports.open_ = open_;
/* No side effect */
