var config = {
  map: {
    '*': {
      'm2base': 'js/m2base',
      'slick': 'bower_components/slick-carousel/slick/slick',
      'tablesaw': 'bower_components/filament-tablesaw/dist/tablesaw',
      'tablesawInit': 'bower_components/filament-tablesaw/dist/tablesaw-init',
      'equalizeHeights': 'bower_components/equalize-heights/dist/equalize-heights',
      'phyScroll': 'bower_components/phyScroll/dist/phyScroll',
      'phyScrollInit': 'js/phyScrollInit',
      'equalizeHeightsInit': 'js/equalize-heights-init',
      'wrapSelects': 'js/wrap-selects',
      'ratio': 'js/ratio',
      'stickyHeader': 'js/sticky-header',
      'limit': 'bower_components/limit.js/limit',
      'object-cover': 'js/object-cover',
      'selectNav': 'js/select-nav',
      'syncCartInfo': 'js/sync-cart-info',
      'toTheTop': 'js/to-the-top',
      'notificationMessages': 'js/notification-messages',
      'slide-toggle': 'js/slide-toggle',
      'fastclick': 'bower_components/fastclick/lib/fastclick',
      'mobileDetect': 'bower_components/mobile-detect/mobile-detect'
    }
  },
  shim: {
    'slick': {
      'deps': ['jquery']
    },
    'equalizeHeights': {
      'deps': ['jquery']
    },
    'phyScroll': {
      'deps': ['jquery']
    },
    'covervid': {
      'deps': ['jquery']
    }
  }
};
