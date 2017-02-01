'use strict';
const angular = require('angular');

export class xcomponentComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello I am xcomponent';
    //this.panelMessage = 'Hello World';
  }

  clearComment = function() {
    this.onClearComment();
  };

  updateComment = function() {
    this.onUpdateComment({comment: this.comment});
  };

  $onInit() {
    //console.log("xcomponentComponent: entering $onInit() ...");
    //console.log(this);
  }

  $onChanges(changesObj) {
    //console.log("xcomponentComponent: entering $onChanges(changesObj) ...");
    //console.log(changesObj);
  }

  $doCheck() {
    //console.log("xcomponentComponent: entering $doCheck() ...");
    //console.log(this);
  }

  //$onChanges() {
    //console.log("xcomponentComponent: entering $onChanges() ...");
    //console.log(this);
  //}

  $onDestroy() {
    //console.log("xcomponentComponent: entering $onDestroy() ...");
    //console.log(this);
  }

  $postLink() {
    //console.log("xcomponentComponent: entering $postLink() ...");
    //console.log(this);
  }

  //
}

export default angular.module('xApp.xcomponent', [])
  .component('xcomponent', {
    template: require('./xcomponent.html'),
    bindings: {
      employees: '<',    //<, one way binding
      comment: '<',      //=, two way binding; '<' is recommended
      onClearComment: '&',       //output as callback
      onUpdateComment: '&'       //output as callback
    },
    controller: xcomponentComponent
  })
  .name;
