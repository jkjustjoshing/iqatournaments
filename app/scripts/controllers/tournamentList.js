'use strict';

angular.module('iqatournamentsApp')
  .controller('TournamentListCtrl', function ($scope, Tournaments, $state) {

    Tournaments.getTournaments().then(function(tournaments){
      $scope.tournaments = tournaments;
    });

  });
