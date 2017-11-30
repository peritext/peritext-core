const expect = require('expect');
const validateStory = require('../validators/validateStory');
const validateSection = require('../validators/validateSection');
const validateResource = require('../validators/validateResource');
const validateContextualization = require('../validators/validateContextualization');
const validateContextualizer = require('../validators/validateContextualizer');
const validateDataset = require('../validators/validateDataset');
const validStories = [
  require('./validStories/story1')
];

const validStory = validStories[0];

describe('validators', () => {
  describe('story validator', () => {
    it('should accept valid stories', () => {
      validStories.forEach(function(story, index) {
        const validation = validateStory(story);
        expect(validation.errors.length).toEqual(0);
      });
      // // todo: test diverse cases of invalid stories

    });
  })

  describe('section validator', () => {
    it('should accept valid sections', () => {
      Object.keys(validStory.sections).forEach(function(id, index) {
        const item = validStory.sections[id];
        const validation = validateSection(item);
        expect(validation.errors.length).toEqual(0);
      });
    })
  });

  describe('resource validator', () => {
    it('should accept valid resources', () => {
      Object.keys(validStory.resources).forEach(function(id, index) {
        const item = validStory.resources[id];
        const validation = validateResource(item);
        expect(validation.errors.length).toEqual(0);
      });
    })
  });

  describe('contextualizer validator', () => {
    it('should accept valid conntextulizers', () => {
      Object.keys(validStory.contextualizers).forEach(function(id, index) {
        const item = validStory.contextualizers[id];
        const validation = validateContextualizer(item);
        expect(validation.errors.length).toEqual(0);
      });
    })
  });

  describe('contextualization validator', () => {
    it('should accept valid contextualizations', () => {
      Object.keys(validStory.contextualizations).forEach(function(id, index) {
        const item = validStory.contextualizations[id];
        const validation = validateContextualization(item);
        expect(validation.errors.length).toEqual(0);
      });
    })
  });

  describe('dataset validator', () => {
    it('should accept valid datasets', () => {
      Object.keys(validStory.datasets).forEach(function(id, index) {
        const item = validStory.datasets[id];
        const validation = validateDataset(item);
        expect(validation.errors.length).toEqual(0);
      });
    });
  });
})

describe('seeders', () => {
  describe('resource creator', () => {
    it('should create a valid resource', () => {
      const createResource = require('../seeders/createResource');
      const defaultResource = createResource();
      const validResource = validateResource(defaultResource);
      expect(validResource.errors.length).toEqual(0);
    });
  });

  describe('section creator', () => {
    it('should create a valid section', () => {
      const createSection = require('../seeders/createSection');
      const defaultSection = createSection();
      const validSection = validateSection(defaultSection);
      expect(validSection.errors.length).toEqual(0);

    });
  });

  describe('story creator', () => {
    it('should create a valid story', () => {
      const createStory = require('../seeders/createStory');
      const defaultStory = createStory();
      const validStory2 = validateSection(defaultStory);
      expect(validStory2.errors.length).toEqual(0);
    });
  });
});
