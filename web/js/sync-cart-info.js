/**
 * sync-cart-info.js
 *
 * The crudest way to sync cart info across elements.
 * Checks for new value every second and updates corresponding elements.
 * Ideally this would hook into the existing update js or watch for DOM mutations instead
 *
 * USAGE
 * Add `data-synced-cart-count` to an element to add the cart count.
 * Accepts json in data attribute for per element settings:
 * data-synced-cart-count='{"showCount": false}'
 */

define([
    'm2base',
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'jquery',
    'ko',
    'underscore',
    'sidebar'
], function(m2base, Component, customerData, $, ko, _) {
    'use strict';

    var SyncCartInfo = window.M2base.SyncCartInfo = {
        init: function() {
            var qty = 0;
            var baseSettings = {
                "showCount" : true
            };

            setInterval(function(){
                var currentQty = 0;

                if($('#minicart-content-wrapper .qty').length){
                    var contents = $('#minicart-content-wrapper .qty').html().replace(/<!--[\s\S]+?-->/g,'').trim();
                    if(contents.length){
                        currentQty = contents;
                    }
                }

                if(qty !== currentQty) {
                    qty = currentQty;

                    if(qty > 0){
                        $('[data-synced-cart-count]').each(function(){
                            $(this).addClass('not-empty');
                            $(this).removeClass('empty');
                        });
                    }
                    else {
                        $('[data-synced-cart-count]').each(function(){
                            $(this).addClass('empty');
                            $(this).removeClass('not-empty');
                        });
                    }

                    $('[data-synced-cart-count]').each(function(){
                        var settings = $.extend({}, baseSettings, $(this).data('synced-cart-count'));

                        if(settings.showCount === true){
                            if(!$(this).find('.cart-count-value').length){
                                $(this).append('<span class="cart-count-value">'+qty+'</span>');
                            } else {
                                $(this).find('.cart-count-value').html(qty);
                            }
                        }
                    });
                }
            }, 1000);
        }
    };

    SyncCartInfo.init();
});
