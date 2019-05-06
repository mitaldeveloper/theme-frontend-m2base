/**
 * phyScrollInit.js
 */

define(['jquery', 'm2base', 'phyScroll'], function($, m2base, phyScroll) {
  'use strict';

    $('[data-physcroll]').phyScroll({
        offset: 120
    });
});
