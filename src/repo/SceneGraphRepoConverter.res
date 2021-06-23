let convertSceneGraphRepoForNoWorkerToSceneGraphRepoForAPI = (
  {
    configRepo,
    sceneRepo,
    gameObjectRepo,
    transformRepo,
    geometryRepo,
    pbrMaterialRepo,
    directionLightRepo,
    basicCameraViewRepo,
    perspectiveCameraProjectionRepo,
    arcballCameraControllerRepo,
    getCanvas,
  }: ISceneGraphRepoForJs.sceneGraphRepoForNoWorker,
): ISceneGraphRepoForJs.sceneGraphRepoForAPI => {
  {
    configRepo: configRepo,
    sceneRepo: sceneRepo,
    gameObjectRepo: gameObjectRepo,
    transformRepo: transformRepo,
    geometryRepo: geometryRepo,
    pbrMaterialRepo: pbrMaterialRepo,
    directionLightRepo: directionLightRepo,
    basicCameraViewRepo: basicCameraViewRepo,
    perspectiveCameraProjectionRepo: perspectiveCameraProjectionRepo,
    arcballCameraControllerRepo: arcballCameraControllerRepo,
    getCanvas: getCanvas,
  }
}

let convertSceneGraphRepoForMainWorkerToSceneGraphRepoForAPI = (
  {
    configRepo,
    sceneRepo,
    gameObjectRepo,
    transformRepo,
    geometryRepo,
    pbrMaterialRepo,
    directionLightRepo,
    basicCameraViewRepo,
    perspectiveCameraProjectionRepo,
    arcballCameraControllerRepo,
    getCanvas,
  }: ISceneGraphRepoForJs.sceneGraphRepoForMainWorker,
): ISceneGraphRepoForJs.sceneGraphRepoForAPI => {
  {
    configRepo: configRepo,
    sceneRepo: sceneRepo,
    gameObjectRepo: gameObjectRepo,
    transformRepo: transformRepo,
    geometryRepo: geometryRepo,
    pbrMaterialRepo: pbrMaterialRepo,
    directionLightRepo: directionLightRepo,
    basicCameraViewRepo: basicCameraViewRepo,
    perspectiveCameraProjectionRepo: perspectiveCameraProjectionRepo,
    arcballCameraControllerRepo: arcballCameraControllerRepo,
    getCanvas: getCanvas,
  }
}
