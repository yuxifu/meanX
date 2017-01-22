'use strict';

describe('Component: xcomponent', function() {
  // load the component's module
  beforeEach(module('xApp.xcomponent'));

  var xcomponentComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    xcomponentComponent = $componentController('xcomponent', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
