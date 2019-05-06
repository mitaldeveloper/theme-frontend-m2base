/* global module */

'use strict';

// Legacy task config - leave for now...
module.exports = {
  icons: {
    files: [
      {
        expand: true,
        cwd: 'web/images/icons/minified',
        src: [
          '*.svg',
          '*.png'
        ],
        dest: 'web/images/icons/dist'
      },
    ],
    options: {
      cssprefix: '.i-',
      enhanceSVG: true,
      dynamicColorOnly: true,
      colors: {
        black: '#000',
        white: '#fff',
        grey: '#ccc'
      }
    }
  }
};

// New task config
var defaultGrunticon = require('../../../../dev/tools/grunt/configs/grunticon');
var _ = require('underscore');

var customGrunticon = {
  themeIcons: {
    files: [
      {
        expand: true,
        cwd: '<%= path.themeDir %>/web/images/icons/minified',
        src: [
          '*.svg',
          '*.png'
        ],
        dest: '<%= path.themeDir %>/web/images/icons/dist'
      }
    ],
    options: {
      cssprefix: '.i-',
      enhanceSVG: true,
      dynamicColorOnly: true,
      colors: {
        black: '#000',
        white: '#fff',
        grey: '#ccc'
      }
    }
  }
};

module.exports = _.extend(defaultGrunticon, customGrunticon);
