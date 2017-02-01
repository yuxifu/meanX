'use strict';

describe('Directive: xdirTabs', function() {
  // load the directive's module and view
  beforeEach(module('xApp.xdirTabs'));
  beforeEach(module('app/exp/xdirTabs/xdirTabs.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<xdir-tabs></xdir-tabs>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the xdirTabs directive');
  }));
});
