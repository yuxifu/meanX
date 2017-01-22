'use strict';
const angular = require('angular');

export class xcomponentComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('xApp.xcomponent', [])
  .component('xcomponent', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: xcomponentComponent
  })
  .name;
