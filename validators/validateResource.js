var Validator = require('jsonschema').Validator;
var v = new Validator();

var metadataSchema = require('../schemas//metadata');
var resourceSchema = require('../schemas//resource');

v.addSchema(metadataSchema, './metadata.json');

module.exports = function (resource) {
  return v.validate(resource, resourceSchema);
}