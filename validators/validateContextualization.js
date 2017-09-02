var Validator = require('jsonschema').Validator;
var v = new Validator();

var contextualizationSchema = require('../schemas//contextualization');


module.exports = function (contextualization) {
  return v.validate(contextualization, contextualizationSchema);
}