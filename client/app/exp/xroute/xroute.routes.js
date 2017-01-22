'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('xroute', {
      url: '/xroute',
      template: '<xroute></xroute>'
    });
}
