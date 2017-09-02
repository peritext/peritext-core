module.exports = {
  schemas: {
    resource:  require('./schemas/resource'),
    contextualization:  require('./schemas/contextualization'),
    contextualizer:  require('./schemas/contextualizer'),
    rawContent:  require('./schemas/rawContent'),
    section:  require('./schemas/section'),
    story:  require('./schemas/story')
  },
  createStory: require('./seeders/createStory'),
  createSection: require('./seeders/createSection'),
  createResource: require('./seeders/createResource'),
  createContextualization: require('./seederes/createContextualization'),
  createContextualizer: require('./seeders/createContextualizer'),

  validateStory: require('./validators/validateStory'),
  validateSection: require('./validators/validateSection'),
  validateResource: require('./validators/validateResource'),
  validateContextualization: require('./validators/validateContextualization'),
  validateContextualizer: require('./validators/validateContextualizer'),
}