var defaults = require('json-schema-defaults');

var contextualizerSchema = require('../schemas/contextualizer');

module.exports = function() {
  return defaults(contextualizerSchema);
}