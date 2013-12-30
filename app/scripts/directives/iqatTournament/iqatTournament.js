'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatTournament', function () {
    return {
      template: '<div></div>',
      scope: true,
      require: 'iqatId',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        Tournament.getTournament(scope.iqatId).then(function(tournament){
          scope.tournament = tournament;
        });


      }
    };
  });
