'use strict';
const angular = require('angular');

/*@ngInject*/
export function xserviceService($http, $log) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var count = 0;
  this.increment = function() {
      count++;
      return count;
  }
  this.decrement = function() {
      count--;
      return count;
  }
  this.getCount = function() {
      return count;
  }
}

export default angular.module('xApp.xservice', [])
  .service('xservice', xserviceService)
  .name;
