'use strict';

angular.module('venti', ['templates','ngAnimate', 'ngTouch', 'ngRoute','directive.g+signin','simplePagination','ui.date'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'login.html'
      })
    .when('/orders', {
        templateUrl: 'list.html',
        controller: 'ListCtrl'
    })
    .when('/order/:id', {
        templateUrl: 'single.html',
        controller: 'SingleCtrl'
    })
    .when('/new', {
        templateUrl: 'new.html',
        controller: 'NewCtrl'
    })
    .when('/new/:id', {
        templateUrl: 'new.html',
        controller: 'NewCtrl'
    })
    .otherwise({
        redirectTo: '/orders'
    });
  })
;
