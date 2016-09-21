
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
            console.log(111);
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
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$rootScope', '$route'];

    function IndexController($scope, $rootScope, $route) {
        var vm = this;
        $rootScope.vm.activeTab = $route.current.$$route.activeTab;
    }
})();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJkaXJlY3RpdmVzL3BvcnRmb2xpb0l0ZW0uanMiLCJtb2R1bGVzL2luZGV4L0luZGV4Q29udHJvbGxlci5qcyIsIm1vZHVsZXMvbXljdi9NeUN2Q29udHJvbGxlci5qcyIsIm1vZHVsZXMvcG9ydGZvbGlvL1BvcnRmb2xpb0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJ10pO1xyXG5cclxuICAgIGFwcC5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcclxuICAgICAgICAkcm9vdFNjb3BlLnZtID0ge307XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcHAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciApIHtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5kZXhDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pLndoZW4oJy9wb3J0Zm9saW8vOml0ZW0nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcG9ydGZvbGlvLmh0bWwnLFxyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdwb3J0Zm9saW8nLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUG9ydGZvbGlvQ29udHJvbGxlcidcclxuICAgICAgICB9KS53aGVuKCcvbXljdi8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvbXljdi5odG1sJyxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnbXljdicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNeUN2Q29udHJvbGxlcidcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7IiwiXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xyXG5cclxuICAgIGFwcC5kaXJlY3RpdmUoJ3BvcnRmb2xpb0l0ZW0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDExMSk7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZGF0YXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgbmV3IGN1c3RvbWVyIHRvIGRpcmVjdGl2ZSBzY29wZVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05ldyBEaXJlY3RpdmUgQ29udHJvbGxlciBJdGVtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsIC8vRGVmYXVsdCBpbiAxLjMrXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtTmFtZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdAJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnQCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnQCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wb3J0Zm9saW9JdGVtJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbn0oKSk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgSW5kZXhDb250cm9sbGVyKTtcclxuXHJcbiAgICBJbmRleENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHJvdXRlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gSW5kZXhDb250cm9sbGVyKCRzY29wZSwgJHJvb3RTY29wZSwgJHJvdXRlKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAkcm9vdFNjb3BlLnZtLmFjdGl2ZVRhYiA9ICRyb3V0ZS5jdXJyZW50LiQkcm91dGUuYWN0aXZlVGFiO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignTXlDdkNvbnRyb2xsZXInLCBNeUN2Q29udHJvbGxlcik7XHJcblxyXG4gICAgTXlDdkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHJvdXRlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gTXlDdkNvbnRyb2xsZXIoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcm91dGUpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgICRyb290U2NvcGUudm0uYWN0aXZlVGFiID0gJHJvdXRlLmN1cnJlbnQuJCRyb3V0ZS5hY3RpdmVUYWI7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdQb3J0Zm9saW9Db250cm9sbGVyJywgUG9ydGZvbGlvQ29udHJvbGxlcik7XHJcblxyXG4gICAgUG9ydGZvbGlvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckcm91dGUnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBQb3J0Zm9saW9Db250cm9sbGVyKCRzY29wZSwgJHJvb3RTY29wZSwgJHJvdXRlKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAkcm9vdFNjb3BlLnZtLmFjdGl2ZVRhYiA9ICRyb3V0ZS5jdXJyZW50LiQkcm91dGUuYWN0aXZlVGFiO1xyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
