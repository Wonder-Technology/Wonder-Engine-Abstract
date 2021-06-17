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

type repo = {sceneGraphRepo: ISceneGraphRepoForJs.sceneGraphRepo}

@genType.import(("most", "Stream"))
type stream<'a> = WonderBsMost.Most.stream<'a>

export type execFunc = repo => stream<unit>

export type pipelineStream = stream<unit>
