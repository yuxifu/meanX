'use strict';

describe('Directive: xdirEvent', function() {
  // load the directive's module and view
  beforeEach(module('xApp.xdirEvent'));
  beforeEach(module('app/exp/xdirEvent/xdirEvent.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<xdir-event></xdir-event>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the xdirEvent directive');
  }));
});
