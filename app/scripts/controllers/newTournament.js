'use strict';

angular.module('iqatournamentsApp')
  .controller('NewTournamentCtrl', function ($scope){//, Tournaments, $state) {

    $scope.inputs = {
      name: '',
      location: '',
      director: '',
      date: '',
      id: ''
    };

    $scope.validId = /^[a-z0-9\-]{3,}$/;

    $scope.generateId = function(){

      if(!$scope.lockId){
        $scope.inputs.id = $scope.inputs.name
               .toLowerCase()
               .replace(/ /g, '')
               .replace(/[^a-z0-9\-]/g, '');
      }
    };
    $scope.idManuallyChanged = function(){
      $scope.lockId = $scope.inputs.id === undefined || $scope.inputs.id.length > 0;
    };

    $scope.idBlurred = function(){
      if($scope.inputs.id !== undefined && $scope.inputs.id.length === 0){
        $scope.generateId();
      }
    };

  });
