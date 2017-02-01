'use strict';
const angular = require('angular');

/*@ngInject*/
export function xfilterFilter() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
}


export default angular.module('xApp.xfilter', [])
  .filter('xfilter', xfilterFilter)
  .name;
