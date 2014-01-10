'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatLogin', function ($state) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'scripts/directives/iqatLogin/iqatLogin.html',
      scope: {
      },
      link: function postLink(scope, element, attrs) {

        scope.inputs = {
          email: '',
          password: ''
        };

        scope.login = function() {
          //submit login info
        };

      }
    };
  });
