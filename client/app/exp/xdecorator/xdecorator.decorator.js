'use strict';
const angular = require('angular');

/*@ngInject*/
export function xdecoratorDecorator($delegate) {
  // decorate the $delegate
  return $delegate;
}

export default angular.module('xApp.xdecorator', [])
  .config(function($provide) {
    $provide.decorator('xdecorator', xdecoratorDecorator);
  })
  .name;
