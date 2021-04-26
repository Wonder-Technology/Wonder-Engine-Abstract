

import * as Curry from "../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Belt_Array from "../../../../node_modules/bs-platform/lib/es6/belt_Array.js";

var reduceOneParam = Belt_Array.reduceU;

function reduceOneParami(arr, param, func) {
  var mutableParam = param;
  for(var i = 0 ,i_finish = arr.length; i < i_finish; ++i){
    mutableParam = func(mutableParam, arr[i], i);
  }
  return mutableParam;
}

function includes(arr, value) {
  return arr.includes(value);
}

function sliceFrom(arr, index) {
  return arr.slice(index);
}

function unsafeGetFirst(arr) {
  return arr[0];
}

function push(arr, value) {
  arr.push(value);
  return arr;
}

function forEach(arr, func) {
  arr.forEach(Curry.__1(func));
  
}

export {
  reduceOneParam ,
  reduceOneParami ,
  includes ,
  sliceFrom ,
  unsafeGetFirst ,
  push ,
  forEach ,
  
}
/* No side effect */
