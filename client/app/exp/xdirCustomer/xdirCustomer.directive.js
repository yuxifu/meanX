'use strict';
const angular = require('angular');

export default angular.module('xApp.xdirCustomer', [])
  .controller('xdirCustomerController', ['$scope', function($scope) {
    $scope.naomi = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
    $scope.igor = {
      name: 'Igor',
      address: '123 Somewhere'
    };
  }])
  .directive('xdirCustomer', function() {
    return {
      restrict: 'EA',
      scope: {
        customer: '<info'
      },
      //templateUrl: 'xdirCustomer.html',
      //templateUrl: '/app/exp/xdirCustomer/xdirCustomer.html',
      templateUrl: function(elem, attr) {
          return '/app/exp/xdirCustomer/xdirCustomer' + attr.type + '.html';
        }
        //template: require('./xdirCustomer.html'),
        //template: 'Name: {{customer.name}} Address: {{customer.address}}',
    };
  })
  .name;
