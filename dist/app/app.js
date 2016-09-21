
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
            activeTab: 'portfolio',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJkaXJlY3RpdmVzL3BvcnRmb2xpb0l0ZW0uanMiLCJzZXJ2aWNlcy92aWV3U2VydmljZS5qcyIsIm1vZHVsZXMvaW5kZXgvSW5kZXhDb250cm9sbGVyLmpzIiwibW9kdWxlcy9teWN2L015Q3ZDb250cm9sbGVyLmpzIiwibW9kdWxlcy9wb3J0Zm9saW8vUG9ydGZvbGlvQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSk7XHJcblxyXG4gICAgYXBwLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xyXG4gICAgICAgICRyb290U2NvcGUudm0gPSB7fTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFwcC5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyICkge1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdpbmRleCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSkud2hlbignL3BvcnRmb2xpby86aXRlbScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wb3J0Zm9saW8uaHRtbCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ3BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQb3J0Zm9saW9Db250cm9sbGVyJ1xyXG4gICAgICAgIH0pLndoZW4oJy9teWN2LycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9teWN2Lmh0bWwnLFxyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdteWN2JyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ015Q3ZDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSkoKTsiLCJcclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XHJcblxyXG4gICAgYXBwLmRpcmVjdGl2ZSgncG9ydGZvbGlvSXRlbScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLml0ZW1zID0gYW5ndWxhci5jb3B5KCRzY29wZS5kYXRhc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFkZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FkZCBuZXcgY3VzdG9tZXIgdG8gZGlyZWN0aXZlIHNjb3BlXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV3IERpcmVjdGl2ZSBDb250cm9sbGVyIEl0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0VBJywgLy9EZWZhdWx0IGluIDEuMytcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiAnQCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0AnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdAJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICdAJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BvcnRmb2xpb0l0ZW0nXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5mYWN0b3J5KCd2aWV3U2VydmljZScsIFsnJHRpbWVvdXQnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAgZnVuY3Rpb24oJHRpbWVvdXQsICRyb290U2NvcGUsICRyb3V0ZSkge1xyXG4gICAgICAgICAgICB2YXIgZmFjdG9yeSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmFjdG9yeS5pbml0VmlldyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS52bS5hY3RpdmVUYWIgPSAkcm91dGUuY3VycmVudC4kJHJvdXRlLmFjdGl2ZVRhYjtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCggXCIuZmFkZS1lbGVtZW50XCIgKS5yZW1vdmVDbGFzcyggXCJmYWRlLWluLWZyYW1lXCIgKTtcclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCggXCIuZmFkZS1lbGVtZW50XCIgKS5hZGRDbGFzcyggXCJmYWRlLWluLWZyYW1lXCIgKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xyXG4gICAgICAgIH1dKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdJbmRleENvbnRyb2xsZXInLCBJbmRleENvbnRyb2xsZXIpO1xyXG5cclxuICAgIEluZGV4Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckcm91dGUnLCAndmlld1NlcnZpY2UnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbmRleENvbnRyb2xsZXIoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcm91dGUsIHZpZXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2aWV3U2VydmljZS5pbml0VmlldygpO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignTXlDdkNvbnRyb2xsZXInLCBNeUN2Q29udHJvbGxlcik7XHJcblxyXG4gICAgTXlDdkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHJvdXRlJywgJ3ZpZXdTZXJ2aWNlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gTXlDdkNvbnRyb2xsZXIoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcm91dGUsIHZpZXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2aWV3U2VydmljZS5pbml0VmlldygpO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignUG9ydGZvbGlvQ29udHJvbGxlcicsIFBvcnRmb2xpb0NvbnRyb2xsZXIpO1xyXG5cclxuICAgIFBvcnRmb2xpb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHJvdXRlUGFyYW1zJywgJyRyb290U2NvcGUnLCAnJHJvdXRlJywgJ3ZpZXdTZXJ2aWNlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gUG9ydGZvbGlvQ29udHJvbGxlcigkcm91dGVQYXJhbXMsICRyb290U2NvcGUsICRyb3V0ZSwgdmlld1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZpZXdTZXJ2aWNlLmluaXRWaWV3KCk7XHJcbiAgICAgICAgdm0udGl0dWxvID0gJHJvdXRlUGFyYW1zLml0ZW07XHJcbiAgICB9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
