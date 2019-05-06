/**
 * sticky-header.js
 */

define(['jquery', 'm2base'], function($, m2base) {
  'use strict';

  var StickyHeader = window.M2base.StickyHeader = {

    elements: {
      elementToWatch: $('.js-sticky-header')
    },

    init: function() {
      var els = this.elements;

      $(window).on('scroll touchmove', function () {
        els.elementToWatch.toggleClass('is-sticky', $(document).scrollTop() > 0);
      }).scroll();
    }
  };

  StickyHeader.init();
});
