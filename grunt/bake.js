/* global module */

'use strict';

// Legacy task config - leave for now...
module.exports = function(grunt, data) {
  return {
    patternlib: {
      options: {
        content: 'patternlib/data/data.json',
        transforms: {
          toUpper: function(str) {
            return String(str).toUpperCase();
          },
          toTitleCase: function(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
          },
          deHyphenate: function(str) {
            return String(str).replace(/-/g, ' ');
          }
        }
      },
      files: [
        {
          expand: true,
          cwd: 'patternlib/',
          src: ['*.html'],
          dest: '<%= pubDir %>',
          ext: '.html'
        }, {
          '<%= pubDir %>/.htaccess': 'patternlib/.htaccess'
        }
      ]
    }
  };
};

// New task config
var defaultBake = require('../../../../dev/tools/grunt/configs/bake');
var _ = require('underscore');

var customBake = {
  themePatternlib: {
    options: {
      content: '<%= path.themeDir %>/patternlib/data/data.json',
      transforms: {
        toUpper: function(str) {
          return String(str).toUpperCase();
        },
        toTitleCase: function(str) {
          str = str.toLowerCase().split(' ');
          for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          }
          return str.join(' ');
        },
        deHyphenate: function(str) {
          return String(str).replace(/-/g, ' ');
        }
      }
    },
    files: [
      {
        expand: true,
        cwd: '<%= path.themeDir %>/patternlib/',
        src: ['*.html'],
        dest: '<%= path.patternlibPubDir %>',
        ext: '.html'
      }, {
        '<%= path.patternlibPubDir %>/.htaccess': '<%= path.themeDir %>/patternlib/.htaccess'
      }
    ]
  }
};

module.exports = _.extend(defaultBake, customBake);
