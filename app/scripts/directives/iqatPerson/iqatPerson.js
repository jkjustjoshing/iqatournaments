'use strict';

// In the future this will be used to automatically
// add things to a person's name like a link to
// their profile or flair for their captain 
// certification state and if they are a snitch

angular.module('iqatournamentsApp')
  .directive('iqatPerson', function ($state, Authenticate, banner, Persons, Teams) {
    return {
      replace: true,
      restrict: 'A',
      require: '',
      scope: {
        person: '=iqatPerson'
      },
      templateUrl: 'scripts/directives/iqatPerson/iqatPerson.html',
      link: function postLink(scope, element, attrs) {
        

      }
    };
  });
