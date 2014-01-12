'use strict';

angular.module('iqatournamentsApp')
  .factory('Authenticate', function ($q, Restangular) {

    var data = {};

    Restangular.all('user').customGET('me').then(
      function(response){
        data = response;
      });

    // Public API here
    return {
      login: function(email, password){
        var deferred = $q.defer();

        var toPost = {
          email: email,
          password: password
        };

        Restangular.all('user').customPOST(toPost, 'login').then(
          function(response){
            // OK, logged in
            data = response;
            deferred.resolve();
          },
          function(error){
            // not ok
            console.log(error);
            deferred.reject();
          });
        
        return deferred.promise;
      },
      logout: function(){
        Restangular.all('user').customPOST({}, 'logout').then(
        function(){
          data = {};
        });
      },
      isLoggedIn: function(){
        return !!data.name;
      },
      currentUser: function(){
        return data.name;
      }
      
    };
  });
