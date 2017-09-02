var defaults = require('json-schema-defaults');

var resourceSchema = require('../schemas/resource');
var metadataSchema = require('../schemas/metadata');

resourceSchema.properties.metadata = metadataSchema;

module.exports = function() {
  return defaults(resourceSchema);
}