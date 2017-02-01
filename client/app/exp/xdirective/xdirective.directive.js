'use strict';
const angular = require('angular');

/*@ngInject*/
export function xdirectiveController($scope) {
  $scope.format = 'M/d/yy h:mm:ss a';
}

export default angular.module('xApp.xdirective', [])
  .controller('XdirectiveController', xdirectiveController)
  .directive('myCurrentTime', ['$interval', 'dateFilter',
    function($interval, dateFilter) {
      function link(scope, element, attrs) {
        var format, timeoutId;

        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.myCurrentTime, function(newValue, oldValue, scope) {
          format = newValue;
          updateTime();
        });

        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);
      }

      return {
        //template: require('./xdirective.html'),
        //restrict: 'EA',
        //scope: {
        //format: '=',
        //},
        link: link
      };
    }
  ])
  .name;
