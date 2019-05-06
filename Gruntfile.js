/* globals module */

// Legacy Gruntfile - leave for now...
// New Gruntfile.m2base.js can be found in the root of the main project
module.exports = function(grunt) {
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: true,
    init: true,

    data: {
      projectRoot: '../../../',
      theme: 'm2base',
      pubDir: 'web/patternlib/m2base'
    }
  });
};
