(function() {
    'use strict';

    angular
        .module('app')
        .controller('MyCvController', MyCvController);

    MyCvController.$inject = ['$scope', '$rootScope', '$route', 'viewService'];

    function MyCvController($scope, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
    }
})();