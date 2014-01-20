'use strict';

angular.module('iqatournamentsApp')
  .controller('TournamentViewCtrl', function ($scope, Tournaments, $state, $modal, banner) {

    Tournaments.getTournament($state.params.alias).then(function(tournament) {
      $scope.tournament = tournament;
    });

    // For passing to the iqatAutocomplete directive
    $scope.addTeam = Tournaments.addTeam;


    $scope.newGame = function(){
      // Open modal for new game
      console.log($scope.tournament);
      $modal.open({
        templateUrl: 'views/newGame.html',
        controller: 'NewGameCtrl',
        resolve: {
          tournament: function(){
            return $scope.tournament;
          }
        },
      }).result.then(function(success){
        banner.success('Created a game' + success, 3000);
      });
    };

  });
