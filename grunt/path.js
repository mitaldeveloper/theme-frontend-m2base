/* global module */

'use strict';

var defaultPath = require('../../../../dev/tools/grunt/configs/path');
var _ = require('underscore');

var m2basePath = {
  themeDir: './vendor/gpmd/theme-frontend-m2base',
  patternlibPubDir: './vendor/gpmd/theme-frontend-m2base/web/patternlib/m2base',
  themeStyles: './pub/static/frontend/GPMD/M2base/en_GB/css',
  themeViewPreprocessedStyles: './var/view_preprocessed/css/frontend/GPMD/M2base',
  themeViewPreprocessedSource: './var/view_preprocessed/source/frontend/GPMD/M2base'
};

module.exports = _.extend(defaultPath, m2basePath);
