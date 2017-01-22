'use strict';
const angular = require('angular');

/*@ngInject*/
export function xserviceService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('xApp.xservice', [])
  .service('xservice', xserviceService)
  .name;
