'use strict';

describe('Filter: xfilter', function() {
  // load the filter's module
  beforeEach(module('xApp.xfilter'));

  // initialize a new instance of the filter before each test
  var xfilter;
  beforeEach(inject(function($filter) {
    xfilter = $filter('xfilter');
  }));

  it('should return the input prefixed with "xfilter filter:"', function() {
    var text = 'angularjs';
    expect(xfilter(text)).to.equal('xfilter filter: ' + text);
  });
});
