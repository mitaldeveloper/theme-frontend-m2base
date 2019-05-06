/* global module */

'use strict';

// Legacy task config - leave for now...
module.exports = {
  icons: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'web/images/icons/src',
        src: [
          '**/*.svg'
        ],
        dest: 'web/images/icons/minified'
      }
    ]
  }
};

// New task config
var defaultSvgmin = require('../../../../dev/tools/grunt/configs/svgmin');
var _ = require('underscore');

var customSvgmin = {
  themeIcons: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: '<%= path.themeDir %>/web/images/icons/src',
        src: [
          '**/*.svg'
        ],
        dest: '<%= path.themeDir %>/web/images/icons/minified'
      }
    ]
  }
};

module.exports = _.extend(defaultSvgmin, customSvgmin);
