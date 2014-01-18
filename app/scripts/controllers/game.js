'use strict';

angular.module('iqatournamentsApp')
  .controller('GameCtrl', function ($scope, Teams, $state) {

    Teams.getTeam($state.params.alias).then(function(team) {
      $scope.team = team;
    });

    $scope.addMember = Teams.addMember;


  });
