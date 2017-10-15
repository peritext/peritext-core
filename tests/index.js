var expect = require('expect');
var validateStory = require('../validators/validateStory');
var validateSection = require('../validators/validateSection');
var validateResource = require('../validators/validateResource');
var validateContextualization = require('../validators/validateContextualization');
var validateContextualizer = require('../validators/validateContextualizer');
var validateDataset = require('../validators/validateDataset');
var validStories = [
  require('./validStories/story1')
];

validStories.forEach(function(story, index) {
  console.info('evaluating valid story', index + 1);
  const validation = validateStory(story);
  expect(validation.errors.length).toEqual(0);
});
// // todo: test diverse cases of invalid stories

var validStory = validStories[0];

Object.keys(validStory.sections).forEach(function(id, index) {
  const item = validStory.sections[id];
  console.info('evaluating valid section', index + 1);
  const validation = validateSection(item);
  console.log(validation.errors);
  expect(validation.errors.length).toEqual(0);
});

Object.keys(validStory.resources).forEach(function(id, index) {
  const item = validStory.resources[id];
  console.info('evaluating valid resource', index + 1);
  const validation = validateResource(item);
  expect(validation.errors.length).toEqual(0);
});

Object.keys(validStory.contextualizers).forEach(function(id, index) {
  const item = validStory.contextualizers[id];
  console.info('evaluating valid contextualizer', index + 1);
  const validation = validateContextualizer(item);
  expect(validation.errors.length).toEqual(0);
});

Object.keys(validStory.contextualizations).forEach(function(id, index) {
  const item = validStory.contextualizations[id];
  console.info('evaluating valid contextualization', index + 1);
  const validation = validateContextualization(item);
  expect(validation.errors.length).toEqual(0);
});

Object.keys(validStory.datasets).forEach(function(id, index) {
  const item = validStory.datasets[id];
  console.info('evaluating valid dataset', index + 1);
  const validation = validateDataset(item);
  expect(validation.errors.length).toEqual(0);
});

var createResource = require('../seeders/createResource');
console.log('creating a default resource');
const defaultResource = createResource();
const validResource = validateResource(defaultResource);
console.log(JSON.stringify(defaultResource, null, 2));
expect(validResource.errors.length).toEqual(0);
console.log('ok');

var createSection = require('../seeders/createSection');
console.log('creating a default section');
const defaultSection = createSection();
const validSection = validateSection(defaultSection);
console.log(JSON.stringify(defaultSection, null, 2));
expect(validSection.errors.length).toEqual(0);
console.log('ok');


var createStory = require('../seeders/createStory');
console.log('creating a default Story');
const defaultStory = createStory();
const validStory2 = validateSection(defaultStory);
console.log(JSON.stringify(defaultStory, null, 2));
expect(validStory2.errors.length).toEqual(0);
console.log('ok');

