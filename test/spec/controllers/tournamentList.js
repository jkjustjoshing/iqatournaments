'use strict';

describe('Controller: TournamentListCtrl', function () {

  // load the controller's module
  beforeEach(module('iqatournamentsApp'));

  var TournamentlistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournamentlistctrlCtrl = $controller('TournamentListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
