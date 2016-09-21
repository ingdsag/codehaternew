
(function() {
    'use strict';
    var app = angular.module('app', ['ngRoute']);

    app.run(function ($rootScope) {
        $rootScope.vm = {};
    });

    app.config(function ($routeProvider ) {

        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            activeTab: 'index',
            controller: 'IndexController'
        }).when('/portfolio/:item', {
            templateUrl: 'pages/portfolio.html',
            activeTab: 'portfolio',
            controller: 'PortfolioController'
        }).when('/mycv/', {
            templateUrl: 'pages/mycv.html',
            activeTab: 'mycv',
            controller: 'MyCvController'
        })
    });
})();