'use strict';

angular.module('iqatournamentsApp')
  .controller('NewGameCtrl', function ($scope, Tournaments, banner, tournament){

    $scope.inputs = {};

    $scope.submit = function(){
      console.log(tournament);
      Tournaments.postGame(tournament, {
        pitch: $scope.inputs.pitch,
        teams: [
          $scope.inputs.team1.id,
          $scope.inputs.team2.id
        ],
        snitch: $scope.inputs.snitch.id,
        headReferee: $scope.inputs.headReferee.id,
        startTime: $scope.inputs.startTime
      }).then(function(response) {
        banner.success(response);
        $scope.$close(true);
      });
      
    };

  });
