'use strict';

angular.module('iqatournamentsApp')
  .controller('NewTeamCtrl', function ($scope, Teams){//, Tournaments, $state) {

    $scope.inputs = {
      name: '',
      captain: ''
    };

    $scope.validAlias = /^[a-z0-9\-]{3,23}$/;

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
      Teams.postTeam({
        name: $scope.inputs.name,
        captain: $scope.inputs.captain.id,
        alias: $scope.inputs.alias
      }).then(function(response) {
        console.log(response);
      });
    };

  });
