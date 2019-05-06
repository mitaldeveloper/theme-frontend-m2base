/**
 * equalize-heights-init.js
 */

define(['jquery', 'm2base'], function($, m2base) {
  'use strict';

  var EqualizeHeights = window.M2base.EqualizeHeights = {
    init: function() {
      var equalizeHeightsWrapper = $('.js-eq-heights__wrapper');

      equalizeHeightsWrapper.each(function () {
        $(this).equalizeHeights({
          childElement: '.js-eq-heights__cell'
        });
      });
    }
  };

  EqualizeHeights.init();
});
