'use strict';

describe('Service: xprovider', function() {
  // load the service's module
  beforeEach(module('xApp.xprovider'));

  // instantiate service
  var xprovider;
  beforeEach(inject(function(_xprovider_) {
    xprovider = _xprovider_;
  }));

  it('should do something', function() {
    expect(!!xprovider).to.be.true;
  });
});
