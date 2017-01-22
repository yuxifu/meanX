'use strict';

describe('Service: xfactory', function() {
  // load the service's module
  beforeEach(module('xApp.xfactory'));

  // instantiate service
  var xfactory;
  beforeEach(inject(function(_xfactory_) {
    xfactory = _xfactory_;
  }));

  it('should do something', function() {
    expect(!!xfactory).to.be.true;
  });
});
