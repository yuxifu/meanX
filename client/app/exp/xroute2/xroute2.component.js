'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

//import routes from '../xroute/xroute.routes';

export class Xroute2Component {
  /*@ngInject*/
  constructor(xservice, xfactory, xprovider) {
    this.message = 'Hello this is from xroute2 at index.html';

    //console.log(this);

    console.log('Xroute2Component, xservice: ' + xservice.getCount());
    console.log('Xroute2Component, xservice: ' + xservice.increment());
    console.log('Xroute2Component, xfactory: ' + xfactory.getCount());
    console.log('Xroute2Component, xfactory: ' + xfactory.increment());
    console.log('Xroute2Component, xprovider: ' + xprovider.getCount());
    console.log('Xroute2Component, xprovider: ' + xprovider.increment());
  }
}

//Xroute2Component.$inject = ['xservice', 'xfactory', 'xprovider'];

export default angular.module('xApp.xroute2', [uiRouter])
  //.config(routes)  //already define at xroute
  .component('xroute2', {
    template: require('./xroute2.html'),
    controller: ['xservice', 'xfactory', 'xprovider', Xroute2Component],
    controllerAs: 'xroute2Ctrl',
    bindings: {
      query: "<"
    },
  })
  .name;
