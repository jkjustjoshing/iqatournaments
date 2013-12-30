'use strict';

angular.module('iqatournamentsApp')
  .factory('Tournaments', function (Restangular) {
    // Service logic
    // ...

    // Public API here
    return {
      getTournaments: function () {
        return Restangular.all('tournaments').getList();
      }
    };
  });
