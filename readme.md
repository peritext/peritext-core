Peritext core
===

This repository is dedicated to document, validate and use the data schema of stories written within the peritext ecosystem.

The module exports the following submodules :

```
{
  schemas: { // project's core data schemas
    resource: Object,
    contextualization:  Object,
    contextualizer:  Object,
    rawContent:  Object,
    section:  Object,
    story:  Object
  },
  // default objects creators
  createStory: Function,
  createSection: Function,
  createResource: Function,
  createContextualization: Function,
  createContextualizer: Function,

  // validators
  validateStory: Function,
  validateSection: Function,
  validateResource: Function,
  validateContextualization: Function,
  validateContextualizer: Function,
}
```

Doc will be improved soon. Waiting for that moment, check `tests/index` to have a first overview of these modules apis.

