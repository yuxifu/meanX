'use strict';
const angular = require('angular');
var moment = require("moment");

/*@ngInject*/
export function fromNowFilter() {
  return function(input) {
    //return `fromNow filter: ${input}`;
    return moment(input).locale(window.navigator.language).fromNow();
  };
}

export default angular.module('meanXApp.fromNow', [])
  .filter('fromNow', fromNowFilter)
  .name;
