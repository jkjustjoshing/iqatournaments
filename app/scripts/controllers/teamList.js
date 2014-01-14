'use strict';

angular.module('iqatournamentsApp')
  .controller('TeamListCtrl', function ($scope, Teams) {

    Teams.getTeams().then(function(teams){
      $scope.teams = teams;
    });

  });
