/**
 * object-cover.js
 */

define([
  'jquery',
  'm2base',
  'limit',
], function($, m2base, limit) {
  'use strict';

  var ObjectCover = window.M2base.ObjectCover = {
    init: function() {
      $('.no-csstransforms .o-cover__object').each(function(){
          $(this).css('margin-left', -$(this).width()/2);
          $(this).css('margin-top', -$(this).height()/2);
      });
    }
  };

  ObjectCover.init();

  $(window).on('resize', function(){
      ObjectCover.init();
  }.throttle(150));

});
