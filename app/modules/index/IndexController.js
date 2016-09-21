(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$rootScope', '$route'];

    function IndexController($scope, $rootScope, $route) {
        var vm = this;
        $rootScope.vm.activeTab = $route.current.$$route.activeTab;
    }
})();