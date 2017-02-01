'use strict';
const angular = require('angular');

export default angular.module('xApp.xdirDialog', [])
  .controller('xdirDialogController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Tobias';
    $scope.message = 'Yuxi';
    $scope.hideDialog = function(message) {
      $scope.message = message;
      $scope.dialogIsHidden = true;
      $timeout(function() {
        $scope.message = 'Quan';
        $scope.dialogIsHidden = false;
      }, 2000);
    };
  }])
  .directive('xdirDialog', function() {
    return {
      template: require('./xdirDialog.html'),
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose'
      },
      //link: function(scope) {
      //    scope.name = 'Jeff';
      //}
    };
  })
  .name;
