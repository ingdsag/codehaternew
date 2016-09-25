(function() {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['$routeParams', '$scope', '$rootScope', '$route', 'viewService'];

    function PortfolioController($routeParams, $scope, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
        $scope.item = $routeParams.item;
    }
})();