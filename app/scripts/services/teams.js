'use strict';

angular.module('iqatournamentsApp')
  .factory('Teams', function (Restangular){//, Authenticate) {
    var teams;

    // Public API here
    return {
      getTeams: function () {
        return teams || Restangular.all('teams').getList();
      },
      getTeam: function(alias) {
        return Restangular.one('teams', alias).get();
      },
      postTeam: function(data) {
        return Restangular.all('teams').post(data);
      },
      findTeams: function(searchTerm){

        var deferred = $q.defer();

        Restangular.all('teams').customGET('search', {name: searchTerm}).then(
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
