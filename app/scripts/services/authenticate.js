'use strict';

angular.module('iqatournamentsApp')
  .factory('Authenticate', function ($q) {

    var data;

    // Public API here
    return {
      login: function(email, password){
        var deferred = $q.defer();

        // // Restangular.
        // email = password;

        setTimeout(function(){
          user = email+password;
          deferred.resolve();
        }, 2000);

        return deferred.promise;
      },
      logout: function(){
        user = null;
      },
      isLoggedIn: function(){
        return user !== null;
      },
      currentUser: function(){
        return user;
      }
      
    };
  });
