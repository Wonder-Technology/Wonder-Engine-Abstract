

import * as Curry from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Belt_List from "../../../../node_modules/bs-platform/lib/es6/belt_List.js";
import * as Result$WonderEngineAbstract from "./Result.bs.js";

function traverseResultM(list, f) {
  return Result$WonderEngineAbstract.mapSuccess(Belt_List.reduce(list, Result$WonderEngineAbstract.succeed(/* [] */0), (function (newListResult, value) {
                    return Result$WonderEngineAbstract.bind(Curry._1(f, value), (function (h) {
                                  return Result$WonderEngineAbstract.bind(newListResult, (function (newList) {
                                                return Result$WonderEngineAbstract.succeed({
                                                            hd: h,
                                                            tl: newList
                                                          });
                                              }));
                                }));
                  })), Belt_List.reverse);
}

function traverseReduceResultM(list, param, f) {
  return Belt_List.reduce(list, Result$WonderEngineAbstract.succeed(param), (function (paramResult, value) {
                return Result$WonderEngineAbstract.bind(paramResult, (function (param) {
                              return Curry._2(f, param, value);
                            }));
              }));
}

function traverseReduceResultMi(list, param, f) {
  return Result$WonderEngineAbstract.bind(Belt_List.reduce(list, Result$WonderEngineAbstract.succeed([
                      0,
                      param
                    ]), (function (resultData, value) {
                    return Result$WonderEngineAbstract.bind(resultData, (function (param) {
                                  var index = param[0];
                                  return Result$WonderEngineAbstract.bind(Curry._2(f, param[1], [
                                                  index,
                                                  value
                                                ]), (function (param) {
                                                return Result$WonderEngineAbstract.succeed([
                                                            index + 1 | 0,
                                                            param
                                                          ]);
                                              }));
                                }));
                  })), (function (param) {
                return Result$WonderEngineAbstract.succeed(param[1]);
              }));
}

function _id(value) {
  return value;
}

function sequenceResultM(list) {
  return traverseResultM(list, _id);
}

function ignoreTraverseResultValue(traverseResult) {
  return Result$WonderEngineAbstract.mapSuccess(traverseResult, (function (param) {
                
              }));
}

function range(start, end_) {
  return Belt_List.makeBy(end_ - start | 0, (function (i) {
                return i + start | 0;
              }));
}

var map = Belt_List.map;

var mapi = Belt_List.mapWithIndex;

function _eq(source, target) {
  return source === target;
}

function includes(list, value) {
  return Belt_List.has(list, value, _eq);
}

function push(list, value) {
  return Belt_List.concat(list, {
              hd: value,
              tl: /* [] */0
            });
}

function remove(list, value) {
  return Belt_List.filter(list, (function (v) {
                return v !== value;
              }));
}

function getLast(list) {
  return Belt_List.get(list, Belt_List.length(list) - 1 | 0);
}

var getBy = Belt_List.getBy;

var reduce = Belt_List.reduce;

var reducei = Belt_List.reduceWithIndex;

var forEach = Belt_List.forEach;

var forEachi = Belt_List.forEachWithIndex;

var toArray = Belt_List.toArray;

var fromArray = Belt_List.fromArray;

var filter = Belt_List.filter;

var length = Belt_List.length;

var head = Belt_List.head;

var nth = Belt_List.get;

export {
  traverseResultM ,
  traverseReduceResultM ,
  traverseReduceResultMi ,
  _id ,
  sequenceResultM ,
  ignoreTraverseResultValue ,
  range ,
  map ,
  mapi ,
  _eq ,
  includes ,
  getBy ,
  reduce ,
  reducei ,
  forEach ,
  forEachi ,
  push ,
  toArray ,
  fromArray ,
  remove ,
  filter ,
  length ,
  head ,
  nth ,
  getLast ,
  
}
/* No side effect */
