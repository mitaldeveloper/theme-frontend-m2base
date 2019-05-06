/**
 * sticky-header.js
 */

define([
    'm2base',
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'jquery',
    'ko',
    'underscore'
], function(m2base, Component, customerData, $, ko) {
  'use strict';

  var NotificationMessages = window.M2base.NotificationMessages = {
    init: function() {
      var html = $('html');
      var msgs = $('.page.messages');
      var miniCartMsgs = $('.minicart-message');

      this.closeAfterTimeout(html, msgs);
      this.closeMessagesOnClick(html, msgs);
      this.closeMiniCartMessagesOnClick(miniCartMsgs);
      this.nestMessages(msgs);
    },

    closeAfterTimeout: function(wrapper, e) {
      if (e.length) {
        wrapper.addClass('messages-state--open');

        var closeMessages = setInterval(function() {
          var isHovered = !!e.filter(function() {
            return $(this).is(":hover");
          }).length;

          if (!isHovered) {
            wrapper.removeClass('messages-state--open');

            setTimeout(function(){
              wrapper.addClass('messages-state--closed');
            }, 150);

            clearInterval(closeMessages);
          }
        }, 5000);
      }
    },

    closeMessagesOnClick: function(wrapper, e) {
      e.each(function() {
        var me = $(this);

        me.on('click', function() {
          wrapper
              .removeClass('messages-state--open')
              .addClass('messages-state--closed');
        });
      });
    },

    closeMiniCartMessagesOnClick: function(e) {
      e.each(function() {
        var me = $(this);

        me.on('click', function() {
          if (me.is('.display--block')) {
            me.removeClass('display--block');
          }
        });
      });
    },

    nestMessages: function(e) {
      var firstMsg = e.eq(0);
      var otherMsgs = e.not(":eq(0)");

      otherMsgs.each(function() {
        var me = $(this);
        var msgContents = me.html();

        firstMsg.append(msgContents);
        me.remove();
      });
    }
  };

  NotificationMessages.init();
});
