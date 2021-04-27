/* TypeScript file generated from ISceneGraphRepoForJs.res by genType. */
/* eslint-disable import/first */


import {Typed_array_Float32Array_t as Js_Typed_array_Float32Array_t} from '../../src/shims/Js.shim';

import {Typed_array_Uint32Array_t as Js_Typed_array_Uint32Array_t} from '../../src/shims/Js.shim';

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class gameObject { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class scene { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class transform { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class geometry { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class pbrMaterial { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class directionLight { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class basicCameraView { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class perspectiveCameraProjection { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class context { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:interface-over-type-literal
export type canvas = {
  readonly width: number; 
  readonly height: number; 
  readonly getContext: (_1:string) => context
};

// tslint:disable-next-line:interface-over-type-literal
export type color = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type configRepo = {
  readonly getIsDebug: () => boolean; 
  readonly setIsDebug: (_1:boolean) => void; 
  readonly getTransformCount: () => number; 
  readonly setTransformCount: (_1:number) => void; 
  readonly getGeometryCount: () => number; 
  readonly setGeometryCount: (_1:number) => void; 
  readonly getGeometryPointCount: () => number; 
  readonly setGeometryPointCount: (_1:number) => void; 
  readonly getDirectionLightCount: () => number; 
  readonly setDirectionLightCount: (_1:number) => void; 
  readonly getPBRMaterialCount: () => number; 
  readonly setPBRMaterialCount: (_1:number) => void
};

// tslint:disable-next-line:interface-over-type-literal
export type position = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type rotation = [number, number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type scale = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type localToWorldMatrix = Js_Typed_array_Float32Array_t;

// tslint:disable-next-line:interface-over-type-literal
export type normalMatrix = Js_Typed_array_Float32Array_t;

// tslint:disable-next-line:interface-over-type-literal
export type eulerAngles = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type angle = number;

// tslint:disable-next-line:interface-over-type-literal
export type axis = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type target = [number, number, number];

// tslint:disable-next-line:interface-over-type-literal
export type transformRepo = {
  readonly create: () => transform; 
  readonly getGameObject: (_1:transform) => (null | undefined | gameObject); 
  readonly getParent: (_1:transform) => (null | undefined | transform); 
  readonly hasParent: (_1:transform) => boolean; 
  readonly removeParent: (_1:transform) => void; 
  readonly getChildren: (_1:transform) => (null | undefined | transform[]); 
  readonly getLocalPosition: (_1:transform) => position; 
  readonly setLocalPosition: (_1:transform, _2:position) => void; 
  readonly getPosition: (_1:transform) => position; 
  readonly setPosition: (_1:transform, _2:position) => void; 
  readonly getLocalRotation: (_1:transform) => rotation; 
  readonly setLocalRotation: (_1:transform, _2:rotation) => void; 
  readonly getRotation: (_1:transform) => rotation; 
  readonly setRotation: (_1:transform, _2:rotation) => void; 
  readonly getLocalScale: (_1:transform) => scale; 
  readonly setLocalScale: (_1:transform, _2:scale) => void; 
  readonly getScale: (_1:transform) => scale; 
  readonly setScale: (_1:transform, _2:scale) => void; 
  readonly getLocalEulerAngles: (_1:transform) => eulerAngles; 
  readonly setLocalEulerAngles: (_1:transform, _2:eulerAngles) => void; 
  readonly getEulerAngles: (_1:transform) => eulerAngles; 
  readonly setEulerAngles: (_1:transform, _2:eulerAngles) => void; 
  readonly rotateLocalOnAxis: (_1:transform, _2:[angle, axis]) => void; 
  readonly rotateWorldOnAxis: (_1:transform, _2:[angle, axis]) => void; 
  readonly getLocalToWorldMatrix: (_1:transform) => localToWorldMatrix; 
  readonly getNormalMatrix: (_1:transform) => normalMatrix; 
  readonly lookAt: (_1:transform, _2:target) => void
};

// tslint:disable-next-line:interface-over-type-literal
export type geometryRepo = {
  readonly create: () => geometry; 
  readonly getGameObjects: (_1:geometry) => (null | undefined | gameObject[]); 
  readonly createTriangleGeometry: () => geometry; 
  readonly createSphereGeometry: (_1:number, _2:number) => geometry; 
  readonly createPlaneGeometry: (_1:number, _2:number, _3:number, _4:number) => geometry; 
  readonly getVertices: (_1:geometry) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly setVertices: (_1:geometry, _2:Js_Typed_array_Float32Array_t) => void; 
  readonly hasVertices: (_1:geometry) => boolean; 
  readonly getNormals: (_1:geometry) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly setNormals: (_1:geometry, _2:Js_Typed_array_Float32Array_t) => void; 
  readonly hasNormals: (_1:geometry) => boolean; 
  readonly getTexCoords: (_1:geometry) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly setTexCoords: (_1:geometry, _2:Js_Typed_array_Float32Array_t) => void; 
  readonly hasTexCoords: (_1:geometry) => boolean; 
  readonly getTangents: (_1:geometry) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly setTangents: (_1:geometry, _2:Js_Typed_array_Float32Array_t) => void; 
  readonly hasTangents: (_1:geometry) => boolean; 
  readonly getIndices: (_1:geometry) => (null | undefined | Js_Typed_array_Uint32Array_t); 
  readonly setIndices: (_1:geometry, _2:Js_Typed_array_Uint32Array_t) => void; 
  readonly hasIndices: (_1:geometry) => boolean; 
  readonly getIndicesCount: (_1:geometry) => (null | undefined | number); 
  readonly computeTangents: (_1:Js_Typed_array_Float32Array_t, _2:Js_Typed_array_Float32Array_t, _3:Js_Typed_array_Float32Array_t, _4:Js_Typed_array_Uint32Array_t) => Js_Typed_array_Float32Array_t
};

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class diffuseMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class normalMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class channelRoughnessMetallicMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class emissionMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class transmissionMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class specularMap { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:interface-over-type-literal
export type pbrMaterialRepo = {
  readonly create: () => pbrMaterial; 
  readonly getDiffuseColor: (_1:pbrMaterial) => color; 
  readonly setDiffuseColor: (_1:pbrMaterial, _2:color) => void; 
  readonly getSpecularColor: (_1:pbrMaterial) => color; 
  readonly setSpecularColor: (_1:pbrMaterial, _2:color) => void; 
  readonly getSpecular: (_1:pbrMaterial) => number; 
  readonly setSpecular: (_1:pbrMaterial, _2:number) => void; 
  readonly getRoughness: (_1:pbrMaterial) => number; 
  readonly setRoughness: (_1:pbrMaterial, _2:number) => void; 
  readonly getMetalness: (_1:pbrMaterial) => number; 
  readonly setMetalness: (_1:pbrMaterial, _2:number) => void; 
  readonly getTransmission: (_1:pbrMaterial) => number; 
  readonly setTransmission: (_1:pbrMaterial, _2:number) => void; 
  readonly getIOR: (_1:pbrMaterial) => number; 
  readonly setIOR: (_1:pbrMaterial, _2:number) => void; 
  readonly getDiffuseMap: (_1:pbrMaterial) => (null | undefined | diffuseMap); 
  readonly setDiffuseMap: (_1:pbrMaterial, _2:diffuseMap) => void; 
  readonly getChannelRoughnessMetallicMap: (_1:pbrMaterial) => (null | undefined | channelRoughnessMetallicMap); 
  readonly setChannelRoughnessMetallicMap: (_1:pbrMaterial, _2:channelRoughnessMetallicMap) => void; 
  readonly getEmissionMap: (_1:pbrMaterial) => (null | undefined | emissionMap); 
  readonly setEmissionMap: (_1:pbrMaterial, _2:emissionMap) => void; 
  readonly getNormalMap: (_1:pbrMaterial) => (null | undefined | normalMap); 
  readonly setNormalMap: (_1:pbrMaterial, _2:normalMap) => void; 
  readonly getTransmissionMap: (_1:pbrMaterial) => (null | undefined | transmissionMap); 
  readonly setTransmissionMap: (_1:pbrMaterial, _2:transmissionMap) => void; 
  readonly getSpecularMap: (_1:pbrMaterial) => (null | undefined | specularMap); 
  readonly setSpecularMap: (_1:pbrMaterial, _2:specularMap) => void
};

// tslint:disable-next-line:interface-over-type-literal
export type directionLightRepo = {
  readonly create: () => directionLight; 
  readonly getGameObject: (_1:directionLight) => (null | undefined | gameObject); 
  readonly getColor: (_1:directionLight) => color; 
  readonly setColor: (_1:directionLight, _2:color) => void; 
  readonly getIntensity: (_1:directionLight) => number; 
  readonly setIntensity: (_1:directionLight, _2:number) => void; 
  readonly getAllLights: () => directionLight[]; 
  readonly getDirection: (_1:directionLight) => (null | undefined | [number, number, number]); 
  readonly getLightCount: () => number
};

// tslint:disable-next-line:interface-over-type-literal
export type basicCameraViewRepo = {
  readonly create: () => basicCameraView; 
  readonly getGameObject: (_1:basicCameraView) => (null | undefined | gameObject); 
  readonly getViewWorldToCameraMatrix: (_1:basicCameraView) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly isActive: (_1:basicCameraView) => boolean; 
  readonly active: (_1:basicCameraView) => void; 
  readonly unactive: (_1:basicCameraView) => void; 
  readonly setActive: (_1:basicCameraView, _2:boolean) => void; 
  readonly getActiveBasicCameraView: () => (null | undefined | basicCameraView)
};

// tslint:disable-next-line:interface-over-type-literal
export type perspectiveCameraProjectionRepo = {
  readonly create: () => perspectiveCameraProjection; 
  readonly getGameObject: (_1:perspectiveCameraProjection) => (null | undefined | gameObject); 
  readonly getPMatrix: (_1:perspectiveCameraProjection) => (null | undefined | Js_Typed_array_Float32Array_t); 
  readonly getFovy: (_1:perspectiveCameraProjection) => (null | undefined | number); 
  readonly setFovy: (_1:perspectiveCameraProjection, _2:number) => void; 
  readonly getAspect: (_1:perspectiveCameraProjection) => (null | undefined | number); 
  readonly setAspect: (_1:perspectiveCameraProjection, _2:number) => void; 
  readonly getNear: (_1:perspectiveCameraProjection) => (null | undefined | number); 
  readonly setNear: (_1:perspectiveCameraProjection, _2:number) => void; 
  readonly getFar: (_1:perspectiveCameraProjection) => (null | undefined | number); 
  readonly setFar: (_1:perspectiveCameraProjection, _2:number) => void; 
  readonly markDirty: (_1:perspectiveCameraProjection) => void; 
  readonly markNotDirty: (_1:perspectiveCameraProjection) => void; 
  readonly update: () => void
};

// tslint:disable-next-line:interface-over-type-literal
export type gameObjectRepo = {
  readonly create: () => gameObject; 
  readonly getTransform: (_1:gameObject) => (null | undefined | transform); 
  readonly addTransform: (_1:gameObject, _2:transform) => gameObject; 
  readonly hasTransform: (_1:gameObject) => boolean; 
  readonly getGeometry: (_1:gameObject) => (null | undefined | geometry); 
  readonly addGeometry: (_1:gameObject, _2:geometry) => gameObject; 
  readonly hasGeometry: (_1:gameObject) => boolean; 
  readonly getPBRMaterial: (_1:gameObject) => (null | undefined | pbrMaterial); 
  readonly addPBRMaterial: (_1:gameObject, _2:pbrMaterial) => gameObject; 
  readonly hasPBRMaterial: (_1:gameObject) => boolean; 
  readonly getDirectionLight: (_1:gameObject) => (null | undefined | directionLight); 
  readonly addDirectionLight: (_1:gameObject, _2:directionLight) => gameObject; 
  readonly hasDirectionLight: (_1:gameObject) => boolean; 
  readonly getBasicCameraView: (_1:gameObject) => (null | undefined | basicCameraView); 
  readonly addBasicCameraView: (_1:gameObject, _2:basicCameraView) => gameObject; 
  readonly hasBasicCameraView: (_1:gameObject) => boolean; 
  readonly getPerspectiveCameraProjection: (_1:gameObject) => (null | undefined | perspectiveCameraProjection); 
  readonly addPerspectiveCameraProjection: (_1:gameObject, _2:perspectiveCameraProjection) => gameObject; 
  readonly hasPerspectiveCameraProjection: (_1:gameObject) => boolean
};

// tslint:disable-next-line:interface-over-type-literal
export type sceneRepo = {
  readonly create: () => scene; 
  readonly add: (_1:scene, _2:gameObject) => void; 
  readonly getScene: () => (null | undefined | scene); 
  readonly setScene: (_1:scene) => void; 
  readonly getAllGeometries: (_1:scene) => geometry[]; 
  readonly getAllPBRMaterials: (_1:scene) => pbrMaterial[]
};

// tslint:disable-next-line:interface-over-type-literal
export type configData = {
  readonly isDebug: boolean; 
  readonly transformCount: number; 
  readonly geometryCount: number; 
  readonly geometryPointCount: number; 
  readonly pbrMaterialCount: number; 
  readonly directionLightCount: number
};

// tslint:disable-next-line:interface-over-type-literal
export type globalTempData = { readonly float9Array1: Js_Typed_array_Float32Array_t; readonly float32Array1: Js_Typed_array_Float32Array_t };

// tslint:disable-next-line:interface-over-type-literal
export type sceneGraphRepo = {
  readonly configRepo: configRepo; 
  readonly sceneRepo: sceneRepo; 
  readonly gameObjectRepo: gameObjectRepo; 
  readonly transformRepo: transformRepo; 
  readonly geometryRepo: geometryRepo; 
  readonly pbrMaterialRepo: pbrMaterialRepo; 
  readonly directionLightRepo: directionLightRepo; 
  readonly basicCameraViewRepo: basicCameraViewRepo; 
  readonly perspectiveCameraProjectionRepo: perspectiveCameraProjectionRepo; 
  readonly init: (_1:canvas, _2:configData, _3:globalTempData) => void; 
  readonly getCanvas: () => (null | undefined | canvas)
};
