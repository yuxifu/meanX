'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './xroute.routes';

export class XrouteComponent {

  /*@ngInject*/
  constructor() {
    this.message = 'Hi I am xroute, parent of xcomponent';
    this.comment = 'hi there';

    this.employees = [{
      firstName: 'Rima',
      lastName: 'George',
      location: 'San Francisco'
    }, {
      firstName: 'Shaun',
      lastName: 'John',
      location: 'Germany'
    }, {
      firstName: 'Rahul',
      lastName: 'Kurup',
      location: 'Bangalore'
    }, {
      firstName: 'Samson',
      lastName: 'Davis',
      location: 'Canada'
    }, {
      firstName: 'Shilpa',
      lastName: 'Agarwal',
      location: 'Noida'
    }];

    //console.log(this);
  }

  clearComment = function() {
    this.comment = '';
  }

  updateComment = function(comment) {
    this.comment = comment;
  }

  //
}

export default angular.module('xApp.xroute', [uiRouter])
  //.config(routes)
  .component('xroute', {
    template: require('./xroute.html'),
    controller: XrouteComponent,
    controllerAs: 'xrouteCtrl',
    bindings: {
      query: "<"
    },
  })
  .name;
