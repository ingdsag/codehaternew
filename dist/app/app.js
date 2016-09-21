
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJkaXJlY3RpdmVzL3BvcnRmb2xpb0l0ZW0uanMiLCJzZXJ2aWNlcy92aWV3U2VydmljZS5qcyIsIm1vZHVsZXMvaW5kZXgvSW5kZXhDb250cm9sbGVyLmpzIiwibW9kdWxlcy9teWN2L015Q3ZDb250cm9sbGVyLmpzIiwibW9kdWxlcy9wb3J0Zm9saW8vUG9ydGZvbGlvQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSk7XHJcblxyXG4gICAgYXBwLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xyXG4gICAgICAgICRyb290U2NvcGUudm0gPSB7fTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFwcC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyICkge1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdpbmRleCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSkud2hlbignL3BvcnRmb2xpby86aXRlbScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wb3J0Zm9saW8uaHRtbCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ2luZGV4JyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BvcnRmb2xpb0NvbnRyb2xsZXInXHJcbiAgICAgICAgfSkud2hlbignL215Y3YvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL215Y3YuaHRtbCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ215Y3YnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTXlDdkNvbnRyb2xsZXInXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpOyIsIlxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcclxuXHJcbiAgICBhcHAuZGlyZWN0aXZlKCdwb3J0Zm9saW9JdGVtJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuaXRlbXMgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmRhdGFzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYWRkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIG5ldyBjdXN0b21lciB0byBkaXJlY3RpdmUgc2NvcGVcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOZXcgRGlyZWN0aXZlIENvbnRyb2xsZXIgSXRlbSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLCAvL0RlZmF1bHQgaW4gMS4zK1xyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgaXRlbU5hbWU6ICdAJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ0AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcG9ydGZvbGlvSXRlbSdcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG59KCkpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmZhY3RvcnkoJ3ZpZXdTZXJ2aWNlJywgWyckdGltZW91dCcsICckcm9vdFNjb3BlJywgJyRyb3V0ZScsICBmdW5jdGlvbigkdGltZW91dCwgJHJvb3RTY29wZSwgJHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBmYWN0b3J5ID0ge307XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmYWN0b3J5LmluaXRWaWV3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLnZtLmFjdGl2ZVRhYiA9ICRyb3V0ZS5jdXJyZW50LiQkcm91dGUuYWN0aXZlVGFiO1xyXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCBcIi5mYWRlLWVsZW1lbnRcIiApLnJlbW92ZUNsYXNzKCBcImZhZGUtaW4tZnJhbWVcIiApO1xyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCBcIi5mYWRlLWVsZW1lbnRcIiApLmFkZENsYXNzKCBcImZhZGUtaW4tZnJhbWVcIiApO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XHJcbiAgICAgICAgfV0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIEluZGV4Q29udHJvbGxlcik7XHJcblxyXG4gICAgSW5kZXhDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRyb3V0ZScsICd2aWV3U2VydmljZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIEluZGV4Q29udHJvbGxlcigkc2NvcGUsICRyb290U2NvcGUsICRyb3V0ZSwgdmlld1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZpZXdTZXJ2aWNlLmluaXRWaWV3KCk7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdNeUN2Q29udHJvbGxlcicsIE15Q3ZDb250cm9sbGVyKTtcclxuXHJcbiAgICBNeUN2Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAndmlld1NlcnZpY2UnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBNeUN2Q29udHJvbGxlcigkc2NvcGUsICRyb290U2NvcGUsICRyb3V0ZSwgdmlld1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZpZXdTZXJ2aWNlLmluaXRWaWV3KCk7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdQb3J0Zm9saW9Db250cm9sbGVyJywgUG9ydGZvbGlvQ29udHJvbGxlcik7XHJcblxyXG4gICAgUG9ydGZvbGlvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckcm91dGVQYXJhbXMnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAndmlld1NlcnZpY2UnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBQb3J0Zm9saW9Db250cm9sbGVyKCRyb3V0ZVBhcmFtcywgJHJvb3RTY29wZSwgJHJvdXRlLCB2aWV3U2VydmljZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdmlld1NlcnZpY2UuaW5pdFZpZXcoKTtcclxuICAgICAgICB2bS50aXR1bG8gPSAkcm91dGVQYXJhbXMuaXRlbTtcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
