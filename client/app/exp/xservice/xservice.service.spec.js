'use strict';

describe('Service: xservice', function() {
  // load the service's module
  beforeEach(module('xApp.xservice'));

  // instantiate service
  var xservice;
  beforeEach(inject(function(_xservice_) {
    xservice = _xservice_;
  }));

  it('should do something', function() {
    expect(!!xservice).to.be.true;
  });
});
