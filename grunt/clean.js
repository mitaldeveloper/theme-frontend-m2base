/* global module */

'use strict';

// Legacy task config - leave for now...
module.exports = {
  options: {
    force: true // Careful! Allows deleting of files outside of working directory
  },
  patternlib: [
    '<%= pubDir %>'
  ],
  iconsBefore: [
    'web/images/icons/dist'
  ],
  iconsAfter: [
    'web/images/icons/minified'
  ]
};

// New task config
var defaultClean = require('../../../../dev/tools/grunt/configs/clean');
var _ = require('underscore');

var customClean = {
  themeStyles: [
    '<%= path.themeStyles %>',
    '<%= path.themeViewPreprocessedStyles %>',
    '<%= path.themeViewPreprocessedSource %>'
  ],
  themePatternlib: [
    '<%= path.patternlibPubDir %>'
  ],
  themeIconsBefore: [
    '<%= path.themeDir %>/web/images/icons/dist'
  ],
  themeIconsAfter: [
    '<%= path.themeDir %>/web/images/icons/minified'
  ]
};

module.exports = _.extend(defaultClean, customClean);
