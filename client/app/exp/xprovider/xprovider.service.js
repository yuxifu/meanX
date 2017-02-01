'use strict';
const angular = require('angular');

/*@ngInject*/
export function xproviderProvider() {
  // Private variables
  var salutation = 'Hello';
  var count = 0;

  // Private constructor
  function Service() {
    this.greet = function() {
      return salutation;
    };
    this.increment = function() {
        count++;
        return count;
    }
    this.decrement = function() {
        count--;
        return count;
    }
    this.getCount = function() {
        return count;
    }
  }

  // Public API for configuration
  this.setSalutation = function(s) {
    salutation = s;
  };
  this.setCount = function(c){
      count = c;
  }

  // Method for instantiating
  this.$get = function() {
    return new Service();
  };
}

export default angular.module('xApp.xprovider', [])
  .provider('xprovider', xproviderProvider)
  .name;
