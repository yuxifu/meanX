'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './xroute.routes';

export class XrouteComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('xApp.xroute', [uiRouter])
  .config(routes)
  .component('xroute', {
    template: require('./xroute.html'),
    controller: XrouteComponent,
    controllerAs: 'xrouteCtrl'
  })
  .name;
