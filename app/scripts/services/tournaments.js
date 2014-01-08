'use strict';

angular.module('iqatournamentsApp')
  .factory('Tournaments', function (Restangular) {
    var tournaments;

    // Public API here
    return {
      getTournaments: function () {
        return tournaments || Restangular.all('tournaments').getList();
      },
      getTournament: function(alias) {
        return Restangular.one('tournaments', alias).get();
      },
      getTournamentDetails: function(id) {
        return Restangular.one('tournaments', id).one('details').get();
      }
    };
  });
