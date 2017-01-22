'use strict';
const angular = require('angular');

/*@ngInject*/
export function xcontrollerController() {
  this.message = 'Hello';
}

export default angular.module('xApp.xcontroller', [])
  .controller('XcontrollerController', xcontrollerController)
  .name;
