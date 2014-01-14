'use strict';

angular.module('iqatournamentsApp')
  .factory('Persons', function (Restangular, $q){//, Authenticate) {

    // Public API here
    return {
      findPersons: function(searchTerm){

        var deferred = $q.defer();

        Restangular.all('person').customGET('search', {name: searchTerm}).then(
          function(response){
            // OK
            deferred.resolve(response);
          },
          function(){
            // not ok
            deferred.reject();
          });

        return deferred.promise;
      }
    };
  });
