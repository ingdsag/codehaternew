
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
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', '$route', 'viewService'];

    function MainController($scope, $rootScope, $route, viewService) {
        $rootScope.vm = {};
        var mobileMenuVisible = false;
        var mobileMenuAnimating = false;
        $rootScope.vm.toggleMobileMenu = function() {
            if (!mobileMenuAnimating) {
                mobileMenuAnimating = true;
                var leftValue = "0";
                var opacity = "1";
                if (mobileMenuVisible) {
                    leftValue = "100%";
                    opacity = "0";
                }

                $('.mobile-nav').animate({
                    opacity: opacity,
                    left: leftValue
                }, 300, function() {
                    mobileMenuAnimating = false;
                });
                mobileMenuVisible = !mobileMenuVisible;
            }
        };
    }
})();

(function() {

    var app = angular.module('app');

    app.directive('portfolioItem', function () {

        var controller = ['$scope', function ($scope) {
                function init() {
                    $scope.items = angular.copy($scope.datasource);
                }

                init();

                $scope.addItem = function () {
                    $scope.add();

                    //Add new customer to directive scope
                    $scope.items.push({
                        name: 'New Directive Controller Item'
                    });
                };
            }];
        
        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                itemName: '@',
                description: '@',
                image: '@',
                link: '@'
            },
            controller: controller,
            templateUrl: 'views/portfolioItem'
        };
    });

}());

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
                
                $rootScope.toggleMobileMenu = function() {
                    console.log('menuToggle');
                };
                
            };
            return factory;
        }]);
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$rootScope', '$route', 'viewService'];

    function IndexController($scope, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
    }
})();
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