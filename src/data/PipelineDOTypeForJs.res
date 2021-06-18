type link = [#merge | #concat]

type elementType = [#job | #group]

type elementName = string

type element = {
  name: elementName,
  type_: elementType,
}

type groupName = string

type group = {
  name: groupName,
  link: link,
  elements: array<element>,
}

type pipelineName = string

export type pipelineData = {
  name: pipelineName,
  groups: array<group>,
  firstGroup: groupName,
}

type repoForNoWorker = {sceneGraphRepo: ISceneGraphRepoForJs.sceneGraphRepoForNoWorker}

type repoForMainWorker = {sceneGraphRepo: ISceneGraphRepoForJs.sceneGraphRepoForMainWorker}

type repoForRenderWorker = {sceneGraphRepo: ISceneGraphRepoForJs.sceneGraphRepoForRenderWorker}

@genType.import(("most", "Stream"))
type stream<'a> = WonderBsMost.Most.stream<'a>

export type execFuncForNoWorker = repoForNoWorker => stream<unit>

export type execFuncForMainWorker = repoForMainWorker => stream<unit>

export type execFuncForRenderWorker = repoForRenderWorker => stream<unit>

export type pipelineStream = stream<unit>
