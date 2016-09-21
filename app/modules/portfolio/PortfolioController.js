(function() {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['$scope', '$rootScope', '$route'];

    function PortfolioController($scope, $rootScope, $route) {
        var vm = this;
        $rootScope.vm.activeTab = $route.current.$$route.activeTab;
    }
})();