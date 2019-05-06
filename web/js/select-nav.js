/**
 * select-nav.js
 */

define(['jquery', 'm2base'], function($, m2base) {
    'use strict';

    var SelectNav = window.M2base.SelectNav = {
        init: function(element) {
            $('.js-select-nav').each(function(){
                $(this).on('change', function(){
                    if($(this).val().length){
                        window.location = $(this).val();
                    }
                });
            });
        }
    };

    SelectNav.init();
});
