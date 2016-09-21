(function() {
    'use strict';

    angular
        .module('app')
        .factory('viewService', ['$timeout', '$rootScope', '$route', '$window',  function($timeout, $rootScope, $route, $window) {
            var factory = {};
            
            factory.initView = function() {
                $rootScope.vm.activeTab = $route.current.$$route.activeTab;
                angular.element( ".fade-element" ).removeClass( "fade-in-frame" );
                $timeout(function() {
                    angular.element( ".fade-element" ).addClass( "fade-in-frame" );
                    $window.scrollTo(0, 0);
                }, 100);
            };
            return factory;
        }]);
})();
