
(function() {
    'use strict';
    var app = angular.module('app', ['ngRoute', 'ngTouch']);

    app.config(function ($routeProvider ) {

        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            activeTab: 'index',
            controller: 'IndexController'
        }).when('/portfolio/:item', {
            templateUrl: 'pages/portfolio.html',
            activeTab: 'index',
            controller: 'PortfolioController'
        }).when('/mycv/', {
            templateUrl: 'pages/mycv.html',
            activeTab: 'mycv',
            controller: 'MyCvController'
        })
    });
})();