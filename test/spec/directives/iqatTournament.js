'use strict';

describe('Directive: iqatTournament', function () {

  // load the directive's module
  beforeEach(module('iqatournamentsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<iqat-tournament></iqat-tournament>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iqatTournament directive');
  }));
});
