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
          console.log(scope.tournament.id);
          $state.go('tournament', {
            id: scope.tournament.id
          });
        };

      }
    };
  });
