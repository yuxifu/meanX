'use strict';
const angular = require('angular');

/*@ngInject*/
export function xfactoryService() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod() {
      return meaningOfLife;
    }
  };
}


export default angular.module('xApp.xfactory', [])
  .factory('xfactory', xfactoryService)
  .name;
