(function() {
    'use strict';

    angular
        .module('app')
        .controller('MyCvController', MyCvController);

    MyCvController.$inject = ['$scope', '$rootScope', '$route'];

    function MyCvController($scope, $rootScope, $route) {
        var vm = this;
        $rootScope.vm.activeTab = $route.current.$$route.activeTab;
    }
})();