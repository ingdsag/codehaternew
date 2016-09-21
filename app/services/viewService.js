(function() {
    'use strict';

    angular
        .module('app')
        .factory('viewService', ['$timeout', '$rootScope', '$route',  function($timeout, $rootScope, $route) {
            var factory = {};
            
            factory.initView = function() {
                $rootScope.vm.activeTab = $route.current.$$route.activeTab;
                angular.element( ".fade-element" ).removeClass( "fade-in-frame" );
                $timeout(function() {
                    angular.element( ".fade-element" ).addClass( "fade-in-frame" );
                }, 100);
            };
            return factory;
        }]);
})();
