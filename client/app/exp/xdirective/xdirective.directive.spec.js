'use strict';

describe('Directive: xdirective', function() {
  // load the directive's module and view
  beforeEach(module('xApp.xdirective'));
  beforeEach(module('app/exp/xdirective/xdirective.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<xdirective></xdirective>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the xdirective directive');
  }));
});
