'use strict';
const angular = require('angular');

/*@ngInject*/
export function xfilterFilter() {
  return function(input) {
    return `xfilter filter: ${input}`;
  };
}


export default angular.module('xApp.xfilter', [])
  .filter('xfilter', xfilterFilter)
  .name;
