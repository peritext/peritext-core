var Validator = require('jsonschema').Validator;
var v = new Validator();

var datasetSchema = require('../schemas//dataset');

module.exports = function (dataset) {
  return v.validate(dataset, datasetSchema);
}