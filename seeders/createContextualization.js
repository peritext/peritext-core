var defaults = require('json-schema-defaults');

var contextualizationSchema = require('../schemas/contextualization');


module.exports = function() {
  return defaults(contextualizationSchema);
}