'use strict';

angular.module('iqatournamentsApp')
  .directive('iqatAutocomplete', function ($state, Authenticate, banner, Persons, Teams) {
    return {
      replace: true,
      require: 'ngModel',
      restrict: 'A',
      templateUrl: 'scripts/directives/iqatAutocomplete/iqatAutocomplete.html',
      link: function postLink(scope, element, attrs, controller) {

        var searchMethod;
        if(attrs.autocompleteModel.indexOf('person') !== -1 || attrs.autocompleteModel.indexOf('member') !== -1){
          searchMethod = Persons.findPersons;
        }else if(attrs.autocompleteModel.indexOf('team') !== -1){
          searchMethod = Teams.findTeams;
        }else{
          console.error('iqaAutocomplete directive MUST specify what model to search among those allowed.');
        }


        scope.$watch(attrs.ngModel, function(newValue, oldValue){
          if(newValue !== oldValue){
            if(attrs.iqatAutocomplete === 'enforce'){
              // We want to enforce having an actual model,
              // so only set to valid if the model
              // is an object with an id property (not a plain string)
              controller.$setValidity('model', !!newValue.id);
            }
          }
        });

        scope.search = function(searchValue){
          return searchMethod(searchValue).catch(function(){
            banner.warning('The server could not be contacted. Try again later.');
            return [];
          });
        };

      }
    };
  });
