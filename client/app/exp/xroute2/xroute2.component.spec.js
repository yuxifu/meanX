'use strict';

describe('Component: Xroute2Component', function() {
  // load the controller's module
  beforeEach(module('xApp.xroute2'));

  var Xroute2Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Xroute2Component = $componentController('xroute2', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
