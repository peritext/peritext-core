var defaults = require('json-schema-defaults');

var datasetSchema = require('../schemas/dataset');

module.exports = function() {
  return defaults(datasetSchema);
}