/**
 * slide-toggle.js
 *
 * Generic trigger/toggle function
 */

define(['jquery', 'm2base'], function($, m2base) {
  'use strict';

    $('[data-slide-toggle]').each(function(){
        $(this).on('click', function(e){
            $($(this).data('slide-toggle')).slideToggle();
            e.preventDefault();
        });
    })
});
