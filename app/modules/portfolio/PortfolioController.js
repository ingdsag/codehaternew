(function() {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['$routeParams', '$rootScope', '$route', 'viewService'];

    function PortfolioController($routeParams, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
        vm.titulo = $routeParams.item;
    }
})();