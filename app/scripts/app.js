'use strict';

angular.module('iqatournamentsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider, RestangularProvider, iqatConfig) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    var root = {
      name: 'root',
      url: '/',
      templateUrl: 'views/layout.html',
      controller: 'RootCtrl',
      abstract: true
    };

    var home = {
      name: 'home',
      url: '',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      parent: root
    };

    var tournaments = {
      name: 'tournaments',
      url: 'tournaments',
      templateUrl: 'views/tournamentList.html',
      controller: 'TournamentListCtrl',
      parent: root
    };

    var tournament = {
      name: 'tournament',
      url: 'tournaments/:id',
      templateUrl: 'views/tournament.html',
      controller: 'TournamentCtrl',
      parent: root
    };

    var newTournament = {
      name: 'tournaments.new',
      url: 'tournaments/new',
      templateUrl: 'views/newTournament.html',
      controller: 'NewTournamentCtrl',
      parent: root
    };

    var login = {
      name: 'login',
      url: 'login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      parent: root
    };

    var teams = {
      name: 'teams',
      url: 'teams',
      templateUrl: 'views/teamList.html',
      controller: 'TeamListCtrl',
      parent: root
    };

    var team = {
      name: 'team',
      url: 'teams/:id',
      templateUrl: 'views/team.html',
      controller: 'TeamCtrl',
      parent: root
    };

    var newTeam = {
      name: 'teams.new',
      url: 'teams/new',
      templateUrl: 'views/newTeam.html',
      controller: 'NewTeamCtrl',
      parent: root
    };


    var createAccount = {
      name: 'createAccount',
      url: 'createAccount',
      templateUrl: 'views/createAccount.html',
      controller: 'LoginCtrl',
      parent: root
    };

    // Enable this when server is set up to respond to
    // requests to all directories
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state(root)
      .state(home)
      .state(tournaments)
      .state(newTournament)
      .state(tournament)
      .state(login)
      .state(teams)
      .state(newTeam)
      .state(team)
      .state(createAccount);

    RestangularProvider.setBaseUrl(iqatConfig.api);
    RestangularProvider.setDefaultHttpFields({withCredentials: true});

  });
