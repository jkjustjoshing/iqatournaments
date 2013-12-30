'use strict';

angular.module('iqatournamentsApp')
  .factory('Tournaments', function (Restangular) {
    var tournaments;

    // Public API here
    return {
      getTournaments: function () {
        return tournaments || Restangular.all('tournaments').getList();
      },
      getTournament: function(id) {
        return Restangular.one('tournaments', id).get();
      }
    };
  });
