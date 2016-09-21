
(function() {
    'use strict';
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            controller: 'IndexController'
        }).when('/portfolio/:item', {
            templateUrl: 'pages/portfolio.html',
            controller: 'PortfolioController'
        }).when('/mycv/', {
            templateUrl: 'pages/mycv.html',
            controller: 'MyCvController'
        })
    });
})();