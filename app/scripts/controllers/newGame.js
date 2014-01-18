'use strict';

angular.module('iqatournamentsApp')
  .controller('NewGameCtrl', function ($scope, Tournaments){//, Tournaments, $state) {

    $scope.inputs = {};

    $scope.submit = function(){
      // Tournaments.postTournament({
      //   name: $scope.inputs.name,
      //   location: $scope.inputs.location,
      //   date: $scope.inputs.date,
      //   director: $scope.inputs.director.id,
      //   alias: $scope.inputs.alias
      // }).then(function(response) {
      //   console.log(response);
      // });
      //$scope.$close(true);
    };

  });
