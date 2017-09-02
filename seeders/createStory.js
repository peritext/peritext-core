var defaults = require('json-schema-defaults');

var storySchema = require('../schemas/story');
var metadataSchema = require('../schemas/metadata');

storySchema.properties.metadata = metadataSchema;

module.exports = function() {
  return defaults(storySchema);
}