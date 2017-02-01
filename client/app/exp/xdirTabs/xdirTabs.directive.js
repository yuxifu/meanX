'use strict';
const angular = require('angular');

export default angular.module('xApp.xdirTabs', [])
  .directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: ['$scope', function MyTabsController($scope) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        this.addPane = function(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          panes.push(pane);
        };
      }],
      template: require('./xdirTabs.html')
    };
  })
  .directive('myPane', function() {
    return {
      require: '^^myTabs',  //requires parent controller
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) { //fourth: controller
        tabsCtrl.addPane(scope);
      },
      template: require('./xdirPane.html')
    };
  })
  .name;
