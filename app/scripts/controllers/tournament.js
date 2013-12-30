'use strict';

angular.module('iqatournamentsApp')
  .controller('TournamentCtrl', function ($scope, Tournaments, $state) {
    console.log($scope);
    Tournaments.getTournamentDetails($state.params.id).then(function(tournament) {
      $scope.tournament = tournament;
    });

  });
