'use strict';

angular.module('iqatournamentsApp')
  .controller('TournamentCtrl', function ($scope, Tournaments, $state) {
    console.log($scope);
    Tournaments.getTournament($state.params.alias).then(function(tournament) {
      $scope.tournament = tournament;
    });

  });
