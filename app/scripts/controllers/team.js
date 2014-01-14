'use strict';

angular.module('iqatournamentsApp')
  .controller('TeamCtrl', function ($scope, Teams) {
    console.log($scope);
    Teams.getTeam($state.params.alias).then(function(team) {
      $scope.team = team;
    });

  });
