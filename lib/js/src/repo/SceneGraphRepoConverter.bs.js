'use strict';


function convertSceneGraphRepoForNoWorkerToSceneGraphRepoForAPI(param) {
  return {
          configRepo: param.configRepo,
          sceneRepo: param.sceneRepo,
          gameObjectRepo: param.gameObjectRepo,
          transformRepo: param.transformRepo,
          geometryRepo: param.geometryRepo,
          pbrMaterialRepo: param.pbrMaterialRepo,
          directionLightRepo: param.directionLightRepo,
          basicCameraViewRepo: param.basicCameraViewRepo,
          perspectiveCameraProjectionRepo: param.perspectiveCameraProjectionRepo,
          arcballCameraControllerRepo: param.arcballCameraControllerRepo,
          getCanvas: param.getCanvas
        };
}

function convertSceneGraphRepoForMainWorkerToSceneGraphRepoForAPI(param) {
  return {
          configRepo: param.configRepo,
          sceneRepo: param.sceneRepo,
          gameObjectRepo: param.gameObjectRepo,
          transformRepo: param.transformRepo,
          geometryRepo: param.geometryRepo,
          pbrMaterialRepo: param.pbrMaterialRepo,
          directionLightRepo: param.directionLightRepo,
          basicCameraViewRepo: param.basicCameraViewRepo,
          perspectiveCameraProjectionRepo: param.perspectiveCameraProjectionRepo,
          arcballCameraControllerRepo: param.arcballCameraControllerRepo,
          getCanvas: param.getCanvas
        };
}

exports.convertSceneGraphRepoForNoWorkerToSceneGraphRepoForAPI = convertSceneGraphRepoForNoWorkerToSceneGraphRepoForAPI;
exports.convertSceneGraphRepoForMainWorkerToSceneGraphRepoForAPI = convertSceneGraphRepoForMainWorkerToSceneGraphRepoForAPI;
/* No side effect */
