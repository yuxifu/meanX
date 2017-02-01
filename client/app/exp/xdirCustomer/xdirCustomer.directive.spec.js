'use strict';

describe('Directive: xdirCustomer', function() {
  // load the directive's module
  beforeEach(module('xApp.xdirCustomer'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<xdir-customer></xdir-customer>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the xdirCustomer directive');
  }));
});
