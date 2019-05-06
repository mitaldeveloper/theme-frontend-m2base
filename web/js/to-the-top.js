/**
 * to-the-top.js
 */

define([
    'jquery', 'm2base'
], function($, m2base) {
    'use strict';

    var ToTheTop = window.M2base.ToTheTop = {
        elements: {
            toTheTopButton: $('.js-tothetop')
        },

        init: function() {
            this.goToTheTop(this.elements);
            this.toggleButtonVisibility(this.elements);
        },

        goToTheTop: function(elements) {
            elements.toTheTopButton.on('click', function(e) {
                var target = $(this).find('.to-the-top__link').attr('href');

                e.preventDefault();

                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500, 'swing');
            });
        },

        toggleButtonVisibility: function(elements) {
            var element = elements.toTheTopButton;
            var currentScrollTop = $(window).scrollTop();
            var lastScrollTop = currentScrollTop;
            var threshold = 200;

            // Link only appears past scrolling threshold and only when scrolling down
            $(window).on('load scroll touchmove', function(event){
                currentScrollTop = $(window).scrollTop();

                if (currentScrollTop < threshold || currentScrollTop < lastScrollTop) {
                    $(element).addClass('is-faded-out');
                } else {
                    $(element).removeClass('is-faded-out');
                }

                lastScrollTop = currentScrollTop;
            });
        }
    };

    ToTheTop.init();
});
