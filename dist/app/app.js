
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
        .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['$routeParams', '$rootScope', '$route', 'viewService'];

    function PortfolioController($routeParams, $rootScope, $route, viewService) {
        var vm = this;
        viewService.initView();
        vm.titulo = $routeParams.item;
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJkaXJlY3RpdmVzL3BvcnRmb2xpb0l0ZW0uanMiLCJzZXJ2aWNlcy92aWV3U2VydmljZS5qcyIsIm1vZHVsZXMvbXljdi9NeUN2Q29udHJvbGxlci5qcyIsIm1vZHVsZXMvaW5kZXgvSW5kZXhDb250cm9sbGVyLmpzIiwibW9kdWxlcy9wb3J0Zm9saW8vUG9ydGZvbGlvQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKTtcclxuXHJcbiAgICBhcHAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XHJcbiAgICAgICAgJHJvb3RTY29wZS52bSA9IHt9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIgKSB7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ2luZGV4JyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KS53aGVuKCcvcG9ydGZvbGlvLzppdGVtJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BvcnRmb2xpby5odG1sJyxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUG9ydGZvbGlvQ29udHJvbGxlcidcclxuICAgICAgICB9KS53aGVuKCcvbXljdi8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbXljdi5odG1sJyxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnbXljdicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNeUN2Q29udHJvbGxlcidcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7IiwiXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xyXG5cclxuICAgIGFwcC5kaXJlY3RpdmUoJ3BvcnRmb2xpb0l0ZW0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZGF0YXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgbmV3IGN1c3RvbWVyIHRvIGRpcmVjdGl2ZSBzY29wZVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05ldyBEaXJlY3RpdmUgQ29udHJvbGxlciBJdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsIC8vRGVmYXVsdCBpbiAxLjMrXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtTmFtZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdAJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnQCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnQCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wb3J0Zm9saW9JdGVtJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbn0oKSk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZmFjdG9yeSgndmlld1NlcnZpY2UnLCBbJyR0aW1lb3V0JywgJyRyb290U2NvcGUnLCAnJHJvdXRlJywgJyR3aW5kb3cnLCAgZnVuY3Rpb24oJHRpbWVvdXQsICRyb290U2NvcGUsICRyb3V0ZSwgJHdpbmRvdykge1xyXG4gICAgICAgICAgICB2YXIgZmFjdG9yeSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmFjdG9yeS5pbml0VmlldyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS52bS5hY3RpdmVUYWIgPSAkcm91dGUuY3VycmVudC4kJHJvdXRlLmFjdGl2ZVRhYjtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCggXCIuZmFkZS1lbGVtZW50XCIgKS5yZW1vdmVDbGFzcyggXCJmYWRlLWluLWZyYW1lXCIgKTtcclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCggXCIuZmFkZS1lbGVtZW50XCIgKS5hZGRDbGFzcyggXCJmYWRlLWluLWZyYW1lXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XHJcbiAgICAgICAgfV0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ015Q3ZDb250cm9sbGVyJywgTXlDdkNvbnRyb2xsZXIpO1xyXG5cclxuICAgIE15Q3ZDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRyb3V0ZScsICd2aWV3U2VydmljZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIE15Q3ZDb250cm9sbGVyKCRzY29wZSwgJHJvb3RTY29wZSwgJHJvdXRlLCB2aWV3U2VydmljZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdmlld1NlcnZpY2UuaW5pdFZpZXcoKTtcclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIEluZGV4Q29udHJvbGxlcik7XHJcblxyXG4gICAgSW5kZXhDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRyb3V0ZScsICd2aWV3U2VydmljZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIEluZGV4Q29udHJvbGxlcigkc2NvcGUsICRyb290U2NvcGUsICRyb3V0ZSwgdmlld1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZpZXdTZXJ2aWNlLmluaXRWaWV3KCk7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdQb3J0Zm9saW9Db250cm9sbGVyJywgUG9ydGZvbGlvQ29udHJvbGxlcik7XHJcblxyXG4gICAgUG9ydGZvbGlvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckcm91dGVQYXJhbXMnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAndmlld1NlcnZpY2UnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBQb3J0Zm9saW9Db250cm9sbGVyKCRyb3V0ZVBhcmFtcywgJHJvb3RTY29wZSwgJHJvdXRlLCB2aWV3U2VydmljZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdmlld1NlcnZpY2UuaW5pdFZpZXcoKTtcclxuICAgICAgICB2bS50aXR1bG8gPSAkcm91dGVQYXJhbXMuaXRlbTtcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
