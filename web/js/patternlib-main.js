/**
 * Pattern library main app entry point for RequireJS
 *
 * Note: The actual RequireJS config for the main site can be found in:
 * vendor/gpmd/theme-frontend-m2base/web/requirejs-config.js
 */

require.config({
  baseUrl: '../',
  paths: {
    'jquery': '../jquery',
    'domready': '../requirejs/domReady',
    'm2base': '../js/m2base',
    'slick': '../bower_components/slick-carousel/slick/slick.min',
    'tablesaw': '../bower_components/filament-tablesaw/dist/tablesaw',
    'tablesawInit': '../bower_components/filament-tablesaw/dist/tablesaw-init',
    'equalizeHeights': '../bower_components/equalize-heights/dist/equalize-heights.min',
    'phyScroll': '../bower_components/phyScroll/dist/phyScroll.min',
    'phyScrollInit': '../js/phyScrollInit',
    'equalizeHeightsInit': '../js/equalize-heights-init',
    'wrapSelects': '../js/wrap-selects',
    'ratio': '../js/ratio',
    'stickyHeader': '../js/sticky-header',
    'selectNav': '../js/select-nav',
    'toTheTop': '../js/to-the-top',
    'widget': '../GPMD_WidgetCore/js/widget',
    'slideshow': '../GPMD_WidgetSlideshow/js/slideshow'
  },
  shim: {
    // 'slick': {
    //   'deps': ['jquery']
    // },
    'equalizeHeights': {
      'deps': ['jquery']
    },
    'phyScroll': {
      'deps': ['jquery']
    }
  }
});

/**
 * Pattern library requirejs modules only (none of this will be loaded on M2 frontend)
 *
 * Define modules to be loaded in M2 here:
 * vendor/gpmd/theme-frontend-m2base/Magento_Theme/templates/page/js/m2base-requirejs.phtml
 */

define(['jquery', 'domready'], function($, domReady) {
  /**
   * Load requirejs modules
   *
   * Note: The Magento 2 equivalent of this can be found in:
   * vendor/gpmd/theme-frontend-m2base/Magento_Theme/templates/page/js/m2base-requirejs.phtml
   */
  require([
    'm2base',
    'tablesaw',
    'tablesawInit',
    'equalizeHeights',
    'equalizeHeightsInit',
    'phyScroll',
    'phyScrollInit',
    'wrapSelects',
    'ratio',
    'stickyHeader',
    'selectNav',
    'toTheTop',
    'widget',
    'slideshow'
  ]);

  // Example usage
  domReady(function() {
    console.log('Patternlib Initialised');

    /**
     * Smooth scroll to id (for on-page navigation)
     */
    var selectNav = $('.js-navigation');

    selectNav.on('change', function() {
      var target = $(this).val();

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500, 'swing');
    });
  });
});
