/* global module */

'use strict';

// Legacy task config - leave for now...
module.exports = {
  dist: {
    cache: true,
    dest: 'web/js/modernizr.js',
    options: [
      'setClasses',
      'addTest',
      'html5printshiv',
      'html5shiv',
      'testProp',
      'fnBind'
    ],
    uglify: true,
    matchCommunityTests: true,
    tests: [
      'touchevents',
      'flexbox'
    ],
    excludeTests: [
      'hidden'
    ],
    crawl: true,
    useBuffers: false,
    files: {
      src: [
        '../../../pub/static/**/*.css',
        '../../../pub/static/**/*.js',
        'patternlib/**/*.html'
      ]
    },
    customTests: []
  }
};

// New task config
var defaultModernizr = require('../../../../dev/tools/grunt/configs/modernizr');
var _ = require('underscore');

var customModernizr = {
  themeModernizr: {
    cache: true,
    dest: '<%= path.themeDir %>/web/js/modernizr.js',
    options: [
      'setClasses',
      'addTest',
      'html5printshiv',
      'html5shiv',
      'testProp',
      'fnBind'
    ],
    uglify: true,
    matchCommunityTests: true,
    tests: [
      'touchevents',
      'flexbox'
    ],
    excludeTests: [
      'hidden'
    ],
    crawl: true,
    useBuffers: false,
    files: {
      src: [
        './pub/static/**/*.css',
        './pub/static/**/*.js',
        '<%= path.themeDir %>/patternlib/**/*.html'
      ]
    },
    customTests: []
  }
};

module.exports = _.extend(defaultModernizr, customModernizr);
