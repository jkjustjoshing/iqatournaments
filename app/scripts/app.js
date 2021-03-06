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
      name: 'tournaments.list',
      url: 'tournaments',
      templateUrl: 'views/tournamentList.html',
      controller: 'TournamentListCtrl',
      parent: root
    };

    var tournament = {
      name: 'tournaments',
      abstract: true,
      url: '^/tournaments/:alias',
      templateUrl: 'views/tournament.html',
      parent: root
    };

    var tournamentView = {
      name: 'tournaments.alias',
      url: '',
      templateUrl: 'views/tournamentView.html',
      controller: 'TournamentViewCtrl',
      parent: tournament
    };

    var newTournament = {
      name: 'tournaments.new',
      url: 'tournaments/new',
      templateUrl: 'views/newTournament.html',
      controller: 'NewTournamentCtrl',
      parent: root
    };

    var game = {
      name: 'tournaments.alias.games.id',
      url: '/games/:id',
      templateUrl: 'views/game.html',
      controller: 'GameCtrl',
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
      name: 'teams.alias',
      url: '^/teams/:alias',
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
      .state(tournamentView)
      .state(login)
      .state(teams)
      .state(newTeam)
      .state(team)
      .state(game)
      .state(createAccount);

    RestangularProvider.setBaseUrl(iqatConfig.api);
    RestangularProvider.setDefaultHttpFields({withCredentials: true});

  });
