'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('meanXApp.login', [])
  .controller('LoginController', LoginController)
  .name;
