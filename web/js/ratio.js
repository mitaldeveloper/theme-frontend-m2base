/**
 * ratio.js
 */

define(['jquery', 'm2base'], function ($, m2base) {
    'use strict';

    var RatioMin = window.M2base.RatioMin = {
        init: function (element) {
            var _element = element || '[data-ratio-min]';

            var ratios = {
                "2by3": 1.5,
                "1by1": 1,
                "2by1": 0.5,
                "3by1": 0.3,
                "16by9": 0.5625,
                "3by2": 0.6,
                "4by3": 0.75
            };

            $(_element).each(function () {
                var element = $(this);
                var options = $(element).data('ratio-min');
                var minHeight = $(element).data('ratio-min-height');

                for (var option in options) {
                    var validator = option.substr(0, option.indexOf('_'));
                    var windowWidth = option.substr(option.indexOf('_') + 1, option.length);
                    windowWidth = window.M2base.Breakpoints[windowWidth];
                    var ratio = ratios[options[option]];

                    if (option !== '*') {
                        if (validator == 'gt' && $(window).width() > windowWidth) {
                            if (minHeight) {
                                // set to a fixed min height on desktop if there is one set
                                $(element).css('min-height', minHeight + 'px');
                            }
                            else {
                                $(element).css('min-height', $(element).width() * ratio);
                            }
                        }
                        else if (validator == 'lt' && $(window).width() < windowWidth) {
                            $(element).css('min-height', $(element).width() * ratio);
                        }
                    } else {
                        if (minHeight) {
                            var sMax = window.M2base.Breakpoints['sMax'];
                            if ($(window).width() > sMax) {
                                // set to a fixed min height on desktop if there is one set
                                $(element).css('min-height', minHeight + 'px');
                            }
                            else {
                                $(element).css('min-height', $(element).width() * ratio);
                            }
                        }
                        else {
                            $(element).css('min-height', $(element).width() * ratio);
                        }
                    }
                }
            });
        },

        init1by1: function () {
            $('.js-ratio-min--1by1').each(function () {
                $(this).css('min-height', $(this).width());
            });
        }
    };

    RatioMin.init();
    RatioMin.init1by1();

    $(window).on('resize', function () {
        RatioMin.init();
        RatioMin.init1by1();
    })

});
