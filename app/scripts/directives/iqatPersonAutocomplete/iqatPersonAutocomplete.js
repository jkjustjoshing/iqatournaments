'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatPersonAutocomplete', function ($state, Authenticate, banner, Persons) {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'scripts/directives/iqatPersonAutocomplete/iqatPersonAutocomplete.html',
      link: function postLink(scope, element, attrs) {

        scope.$watch(scope[attrs.ngModel], function(oldValue, newValue){
          console.log(newValue);
        });

        scope.getPersons = function(searchValue){
          return Persons.getPersons(searchValue).catch(function(){
            banner.warning('The server could not be contacted. Try again later.');
            return [];
          });
        }

      }
    };
  });
