'use strict';

angular.module('iqatournamentsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'ui.router'
])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider, RestangularProvider, iqatConfig) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

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

    var newTournament = {
      name: 'tournaments.new',
      url: 'tournaments/new',
      templateUrl: 'views/newTournament.html',
      controller: 'NewTournamentCtrl',
      parent: home
    };

    var login = {
      name: 'login',
      url: 'login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      parent: home
    };

    var createAccount = {
      name: 'createAccount',
      url: 'createAccount',
      templateUrl: 'views/createAccount.html',
      controller: 'LoginCtrl',
      parent: home
    };

    // Enable this when server is set up to respond to
    // requests to all directories
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state(home)
      .state(yo)
      .state(tournaments)
      .state(newTournament)
      .state(tournament)
      .state(login)
      .state(createAccount);

    RestangularProvider.setBaseUrl(iqatConfig.api);

  });
