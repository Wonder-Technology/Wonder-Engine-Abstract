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

type pipelineData = {
  name: pipelineName,
  groups: array<group>,
  firstGroup: groupName,
}

type repo = {sceneGraphRepo: ISceneGraphRepoForJs.sceneGraphRepo}

type execFunc = repo => WonderBsMost.Most.stream<Result.t2<unit>>

type pipelineStream = WonderBsMost.Most.stream<Result.t2<unit>>
