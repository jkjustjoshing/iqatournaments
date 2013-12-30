'use strict';

angular.module('iqatournamentsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider, iqatConfig) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    var home = {
      name: 'home',
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    };

    $stateProvider.state(home);

    RestangularProvider.setBaseUrl(iqatConfig.api);

  });
