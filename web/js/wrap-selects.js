/**
 * wrap-selects.js
 */

define(['jquery', 'm2base'], function($, m2base) {
  'use strict';

  var WrapSelects = window.M2base.WrapSelects = {
    init: function() {
      var selectLists = $('select:not([multiple]):not(.js-no-select-wrap):visible');

      this.wrapSelects(selectLists);
    },

    wrapSelects: function(e) {
      e.each(function () {
        var _this = $(this);

        console.log(_this);

        _this.wrap("<div class='js-select-wrapper'></div>")
          .parent()
          .append("<div class='js-select-arrow i-arrow-down-tiny-black'></div>");
      });
    }
  };

  WrapSelects.init();

  /* After Ajax events */

  // Reinitialise WrapSelects if page is updated using AJAX
  $(document).ajaxSuccess(function() {
    WrapSelects.init();

    // Reload icons
    grunticon.embedIcons(grunticon.getIcons(grunticon.getCSS(grunticon.href)));
  });

  /**
   * And if all else fails just do it with a sledgehammer...
   */

  var WrapSelectsSledgehammer = window.M2base.WrapSelectsSledgehammer = {

    init: function(e) {
      this.doesElementExist(e);
    },

    doesElementExist: function(e) {
      var interval;
      var counter = 0;
      var limit = 10; // Don't check forever

      function check() {
        var elementToWrap = $(e);
        var elementExists = elementToWrap.length;
        counter ++;

        if (elementExists && counter < limit) {
          WrapSelectsSledgehammer.wrapSelect(elementToWrap);
          clearInterval(interval);
        } else if (!elementExists && counter === limit) {
          clearInterval(interval);
        } else {
          // Still checking...
        }
      }

      interval = setInterval(check, 500);
    },

    wrapSelect: function(e) {
      var isWrapped = e.parent().hasClass('js-select-wrapper');

      if (!isWrapped) {
        e.wrap("<div class='js-select-wrapper'></div>")
          .parent()
          .append("<div class='js-select-arrow i-arrow-down-tiny-black'></div>");
      }
    }
  };

  /**
   * Selects to wrap...
   *
   * This is necessary for select lists added dynamically by knockout
   */

  var shippingAddressCountrySelect = "[name='country_id']:visible";
  var shippingAddressRegionSelect = "[name='region_id']:visible";

  WrapSelectsSledgehammer.init(shippingAddressCountrySelect);
  WrapSelectsSledgehammer.init(shippingAddressRegionSelect);
});
