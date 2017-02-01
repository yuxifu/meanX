'use strict';
const angular = require('angular');

/*@ngInject*/
export function xfactoryService() {
  // Service logic
  // ...

  var count = 0;

  // Public API here
  var service = {};

  service.increment = function() {
      count++;
      return count;
  }
  service.decrement = function() {
      count--;
      return count;
  }
  service.getCount = function() {
      return count;
  }

  return service;
}

export default angular.module('xApp.xfactory', [])
  .factory('xfactory', xfactoryService)
  .name;
