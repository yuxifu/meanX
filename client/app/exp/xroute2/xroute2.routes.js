'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('xroute2', {
      url: '/xroute2',
      template: '<xroute-2></xroute-2>'
    });
}
