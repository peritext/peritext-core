var Validator = require('jsonschema').Validator;
var v = new Validator();

var contextualizerSchema = require('../schemas//contextualizer');


module.exports = function (contextualizer) {
  return v.validate(contextualizer, contextualizerSchema);
}