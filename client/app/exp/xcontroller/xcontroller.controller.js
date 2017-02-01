'use strict';
const angular = require('angular');

/* controller is not really needed in Component-based application */

/*@ngInject*/
export function xcontrollerController($scope) {
  $scope.hello = 'Hello';
  $scope.xixi = "Xixi";
  console.log(this);
}

export default angular.module('xApp.xcontroller', [])
  .controller('XcontrollerController', xcontrollerController)
  .name;
