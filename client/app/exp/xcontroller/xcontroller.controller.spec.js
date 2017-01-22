'use strict';

describe('Controller: XcontrollerCtrl', function() {
  // load the controller's module
  beforeEach(module('xApp.xcontroller'));

  var XcontrollerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    XcontrollerCtrl = $controller('XcontrollerCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
