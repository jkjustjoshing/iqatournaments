'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatPersonAutocomplete', function ($state, Authenticate, banner, Persons) {
    return {
      replace: true,
      require: 'ngModel',
      restrict: 'A',
      templateUrl: 'scripts/directives/iqatPersonAutocomplete/iqatPersonAutocomplete.html',
      link: function postLink(scope, element, attrs, controller) {

        scope.$watch(attrs.ngModel, function(newValue, oldValue){
          if(newValue !== oldValue){
            if(attrs.iqatPersonAutocomplete === 'enforce'){
              // We want to enforce having an actual person,
              // so only set to valid if the person
              // is an object with an id property (not a plain string)
              controller.$setValidity('person', !!newValue.id);
            }
          }
        });

        scope.getPersons = function(searchValue){
          return Persons.getPersons(searchValue).catch(function(){
            banner.warning('The server could not be contacted. Try again later.');
            return [];
          });
        };

      }
    };
  });
