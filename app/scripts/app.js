'use strict';

/**
 * @ngdoc overview
 * @name gpstimeorgApp
 * @description
 * # gpstimeorgApp
 *
 * Main module of the application.
 */
angular
  .module('gpstimeorgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
