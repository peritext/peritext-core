var Validator = require('jsonschema').Validator;
var v = new Validator();

var rawContentSchema = require('../schemas//rawContent');
var metadataSchema = require('../schemas//metadata');
var contextualizationSchema = require('../schemas//contextualization');
var contextualizerSchema = require('../schemas//contextualizer');
var resourceSchema = require('../schemas//resource');
var sectionSchema = require('../schemas//section');

v.addSchema(rawContentSchema, './rawContent.json');
v.addSchema(metadataSchema, './metadata.json');
v.addSchema(contextualizationSchema, './contextualization.json');
v.addSchema(contextualizerSchema, './contextualizer.json');
v.addSchema(resourceSchema, './resource.json');

module.exports = function (section) {
  return v.validate(section, sectionSchema);
}