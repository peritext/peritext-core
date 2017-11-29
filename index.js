module.exports = {
  schemas: {
    dataset:  require('./schemas/dataset'),
    resource:  require('./schemas/resource'),
    contextualization:  require('./schemas/contextualization'),
    contextualizer:  require('./schemas/contextualizer'),
    rawContent:  require('./schemas/rawContent'),
    section:  require('./schemas/section'),
    story:  require('./schemas/story')
  },
  createStory: require('./seeders/createStory'),
  createSection: require('./seeders/createSection'),
  createDataset: require('./seeders/createDataset'),
  createResource: require('./seeders/createResource'),
  createContextualization: require('./seeders/createContextualization'),
  createContextualizer: require('./seeders/createContextualizer'),

  validateStory: require('./validators/validateStory'),
  validateSection: require('./validators/validateSection'),
  validateDataset: require('./validators/validateDataset'),
  validateResource: require('./validators/validateResource'),
  validateContextualization: require('./validators/validateContextualization'),
  validateContextualizer: require('./validators/validateContextualizer'),

  constants: require('./constants/constants')
}