'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatTournament', function ($state) {
    return {
      replace: true,
      templateUrl: 'scripts/directives/iqatTournament/iqatTournament.html',
      scope: {
        tournament: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.viewTournament = function() {
          $state.transitionTo('yo');
        }

      }
    };
  });
