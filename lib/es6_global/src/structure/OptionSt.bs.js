

import * as Curry from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Belt_Option from "../../../../node_modules/bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "../../../../node_modules/bs-platform/lib/es6/caml_option.js";
import * as Result$WonderEngineAbstract from "./Result.bs.js";

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

export {
  unsafeGet ,
  getExn ,
  buildFailResult ,
  get ,
  getWithDefault ,
  isSome ,
  map ,
  flatMap ,
  fromNullable ,
  forEachResult ,
  sequenceResultM ,
  open_ ,
  
}
/* No side effect */
