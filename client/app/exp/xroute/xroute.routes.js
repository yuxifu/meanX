'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('xroute', {
      url: '/xroute',
      views: {
          "@": {
              template: '<xroute query="routeController.query"></xroute>',
              controllerAs: "routeController",
              controller: function(query) {
                const routeController = this;
                routeController.query = query;
              },
              resolve: {
                query: function($stateParams) {
                  return {
                    A: 'View1'
                  };
                }
            }
          },
          "View2@": {
              template: '<xroute-2 query="routeController.query"></xroute-2>',
              controllerAs: "routeController",
              controller: function(query) {
                const routeController = this;
                routeController.query = query;
              },
              resolve: {
                query: function($stateParams) {
                  return {
                    A: 'View2'
                  };
                }
              }
          },
      }
    });
}
