'use strict';
const angular = require('angular');

export default angular.module('xApp.xdirective', [])
  .directive('xdirective', function() {
    return {
      template: require('./xdirective.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
