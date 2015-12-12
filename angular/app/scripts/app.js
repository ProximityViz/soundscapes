'use strict';

/**
 * @ngdoc overview
 * @name soundscapesApp
 * @description
 * # soundscapesApp
 *
 * Main module of the application.
 */
angular
  .module('soundscapesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sounds/:soundId', {
        templateUrl: 'views/sound.html',
        controller: 'SoundCtrl',
        controllerAs: 'sound'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
