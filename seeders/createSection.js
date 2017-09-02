var defaults = require('json-schema-defaults');

var sectionSchema = require('../schemas/section');
var metadataSchema = require('../schemas/metadata');

sectionSchema.properties.metadata = metadataSchema;

module.exports = function() {
  return defaults(sectionSchema);
}