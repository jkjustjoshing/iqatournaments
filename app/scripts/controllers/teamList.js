'use strict';

angular.module('iqatournamentsApp')
  .controller('TeamListCtrl', function ($scope, Teams, $state) {

    Teams.getTeams().then(function(teams){

      for(var i = 0; i < teams.length; ++i){
        teams[i].href = $state.href('teams.alias', {
          alias: teams[i].alias
        });
      }

      $scope.teams = teams;

    });

  });
