'use strict';

describe('Directive: xdirDialog', function() {
  // load the directive's module and view
  beforeEach(module('xApp.xdirDialog'));
  beforeEach(module('app/exp/xdirDialog/xdirDialog.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<xdir-dailog></xdir-dailog>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the xdirDialog directive');
  }));
});
