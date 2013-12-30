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
      templateUrl: 'views/layout.html',
      controller: 'RootCtrl',
      abstract: true
    };

    var yo = {
      name: 'yo',
      url: '',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      parent: home
    };

    var tournaments = {
      name: 'tournaments',
      url: 'tournaments',
      templateUrl: 'views/tournamentList.html',
      controller: 'TournamentListCtrl',
      parent: home
    };

    var tournament = {
      name: 'tournament',
      url: 'tournaments/:id',
      templateUrl: 'views/tournament.html',
      controller: 'TournamentCtrl',
      parent: home
    };

    $stateProvider
      .state(home)
      .state(yo)
      .state(tournaments)
      .state(tournament);

    RestangularProvider.setBaseUrl(iqatConfig.api);

  });
