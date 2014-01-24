'use strict';

angular.module('iqatournamentsApp')
  .factory('Tournaments', function (Restangular){//, Authenticate) {
    var tournaments;

    // Public API here
    return {
      getTournaments: function () {
        return tournaments || Restangular.all('tournaments').getList();
      },
      getTournament: function(alias) {
        return Restangular.one('tournaments', alias).get();
      },
      postTournament: function(data) {
        return Restangular.all('tournaments').post(data);
      },
      addTeam: function(tournament, team){
        return tournament.post('teams', {alias: team.alias});
      },
      postGame: function(tournament, gameData){
        return tournament.post('games', gameData);
      }
    };
  });
