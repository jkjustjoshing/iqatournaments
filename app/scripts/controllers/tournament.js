'use strict';

angular.module('iqatournamentsApp')
  .controller('TournamentCtrl', function ($scope, Tournaments, $state) {
    console.log($scope);
    Tournaments.getTournament($state.params.alias).then(function(tournament) {
      $scope.tournament = tournament;
    });

    $scope.addTeam = function() {
      // Add the team to the tournament
      console.log($scope.team.new);
      Tournaments.addTeam($scope.tournament, $scope.team.new).then(function(){
        $scope.tournament.teams.push($scope.team.new);
        $scope.team.new = '';
      });

    };

  });
