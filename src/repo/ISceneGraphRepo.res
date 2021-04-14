type gameObject

type sceneGameObject = gameObject

type sceneRepo = {getSceneGameObject: unit => sceneGameObject}

type sceneGraphRepo = {sceneRepo: sceneRepo}
