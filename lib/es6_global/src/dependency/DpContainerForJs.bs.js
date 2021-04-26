

import * as OptionSt$WonderEngineAbstract from "../structure/OptionSt.bs.js";

var dpContainer = {
  sceneRenderWork: undefined,
  sceneGraphRepo: undefined
};

function unsafeGetSceneRenderWorkDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneRenderWork);
}

function setSceneRenderWorkDp(dp) {
  dpContainer.sceneRenderWork = dp;
  
}

function unsafeGetSceneGraphRepoDp(param) {
  return OptionSt$WonderEngineAbstract.unsafeGet(dpContainer.sceneGraphRepo);
}

function setSceneGraphRepoDp(dp) {
  dpContainer.sceneGraphRepo = dp;
  
}

export {
  dpContainer ,
  unsafeGetSceneRenderWorkDp ,
  setSceneRenderWorkDp ,
  unsafeGetSceneGraphRepoDp ,
  setSceneGraphRepoDp ,
  
}
/* No side effect */
