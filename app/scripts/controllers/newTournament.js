'use strict';

angular.module('iqatournamentsApp')
  .controller('NewTournamentCtrl', function ($scope, Tournaments){//, Tournaments, $state) {

    $scope.inputs = {
      name: '',
      location: '',
      director: '',
      date: '',
      alias: ''
    };

    $scope.validAlias = /^[a-z0-9\-]{3,}$/;

    $scope.generateAlias = function(){

      if(!$scope.lockAlias){
        $scope.inputs.alias = $scope.inputs.name
               .toLowerCase()
               .replace(/ /g, '')
               .replace(/[^a-z0-9\-]/g, '');
      }
    };
    $scope.aliasManuallyChanged = function(){
      $scope.lockAlias = $scope.inputs.alias === undefined || $scope.inputs.alias.length > 0;
    };

    $scope.aliasBlurred = function(){
      if($scope.inputs.alias !== undefined && $scope.inputs.alias.length === 0){
        $scope.generateAlias();
      }
    };

    $scope.submit = function(){
      Tournaments.postTournament({
        name: $scope.inputs.name,
        location: $scope.inputs.location,
        date: $scope.inputs.date,
        director: $scope.inputs.director.id,
        alias: $scope.inputs.alias
      }).then(function(response) {
        console.log(response);
      });
    };

  });
