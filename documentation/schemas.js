/* eslint global-require: 0 */

import { fromJS } from 'immutable';

export default fromJS([
  // The "getting started" schema provides table-of-contents links
  // for the sections in src/client/introduction.js.  You are free
  // to customize or remove both the schema and the introduction component.
  require('./getting-started.json'),
  require('../schemas/contextualization.json'),
  require('../schemas/contextualizer.json'),
  require('../schemas/contextualizerModules/metadata.json'),
  require('../schemas/dataset.json'),
  require('../schemas/metadata.json'),
  require('../schemas/rawContent.json'),
  require('../schemas/resource.json'),
  require('../schemas/resourcesData/bib.json'),
  require('../schemas/resourcesData/codefiles.json'),
  require('../schemas/resourcesData/data-presentation.json'),
  require('../schemas/resourcesData/dicto.json'),
  require('../schemas/resourcesData/embed.json'),
  require('../schemas/resourcesData/glossary.json'),
  require('../schemas/resourcesData/image.json'),
  require('../schemas/resourcesData/images-group.json'),
  require('../schemas/resourcesData/table.json'),
  require('../schemas/resourcesData/video.json'),
  require('../schemas/resourcesData/webpage.json'),
  require('../schemas/section.json'),
  require('../schemas/story.json'),
  require('../schemas/templateModules/metadata.json')
]);
