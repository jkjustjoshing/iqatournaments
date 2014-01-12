'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatBanner', function ($state, banner, $timeout) {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'scripts/directives/iqatBanner/iqatBanner.html',
      scope: { },
      link: function postLink(scope, element, attrs) {

        scope.showBanner = false;

        scope.$watch( banner.length, function ( newLength, oldLength ) {
          if (newLength !== oldLength){
            if(newLength === 0) {
              scope.showBanner = false;
            }else if(newLength === 1){
              scope.showBanner = true;
              scope.message = banner.nextMessage();
              if(scope.message.timeout){
                $timeout(function(){
                  scope.close();
                }, scope.message.timeout);
              }
            }
          }
        });

        scope.close = function(){
          banner.closeMessage();
          scope.message = banner.nextMessage();
        }
        
      }
    };
  });
