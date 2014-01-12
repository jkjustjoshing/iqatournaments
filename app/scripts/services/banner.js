'use strict';

angular.module('iqatournamentsApp')
  .factory('banner', function () {

    
    var messages = [];

    var addMessage = function(message, type, timeout){
      messages.push({
        message: message,
        class: 'alert-'+type,
        timeout: timeout
      });
    };


    // Public API here
    return {
      success: function(message, timeout){
        addMessage(message, 'success', timeout);
      },
      info: function(message, timeout){
        addMessage(message, 'info', timeout);
      },
      warning: function(message, timeout){
        addMessage(message, 'warning', timeout);
      },
      danger: function(message, timeout){
        addMessage(message, 'danger', timeout);
      },

      nextMessage: function(){
        return messages[0];
      },
      length: function(){
        return messages.length;
      },
      closeMessage: function(){
        messages.shift();
      }
      
    };
  });
