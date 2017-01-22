'use strict';

describe('Component: XrouteComponent', function() {
  // load the controller's module
  beforeEach(module('xApp.xroute'));

  var XrouteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    XrouteComponent = $componentController('xroute', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
