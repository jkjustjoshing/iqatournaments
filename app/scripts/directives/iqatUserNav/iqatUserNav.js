'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatUserNav', function ($state, Authenticate, banner) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'scripts/directives/iqatUserNav/iqatUserNav.html',
      scope: {
        labels: '='
      },
      link: function postLink(scope, element, attrs) {

        scope.$watch( Authenticate.isLoggedIn, function ( isLoggedIn, oldValue ) {
          if ( isLoggedIn !== oldValue ) {
            scope.isLoggedIn = isLoggedIn;
            scope.currentUser = Authenticate.currentUser();
          }
        });

        scope.logout = function(){
          Authenticate.logout().then(function(){
            banner.success('You have successfully logged out.', 1000);
          });
        }
        
      }
    };
  });
