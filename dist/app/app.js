
(function() {
    'use strict';
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/index.html',
            controller: 'IndexController'
        }).when('/portfolio/:item', {
            templateUrl: 'pages/portfolio.html',
            controller: 'PortfolioController'
        }).when('/mycv/', {
            templateUrl: 'pages/mycv.html',
            controller: 'MyCvController'
        })
    });
})();
(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope'];

    function IndexController($scope) {
        var vm = this;
    }
})();




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJtb2R1bGVzL2luZGV4L2FwcC5JbmRleENvbnRyb2xsZXIuanMiLCJtb2R1bGVzL215Y3YvTXlDdkNvbnRyb2xsZXIuanMiLCJtb2R1bGVzL3BvcnRmb2xpby9Qb3J0Zm9saW9Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FDREE7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSk7XHJcbiAgICBhcHAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSkud2hlbignL3BvcnRmb2xpby86aXRlbScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wb3J0Zm9saW8uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQb3J0Zm9saW9Db250cm9sbGVyJ1xyXG4gICAgICAgIH0pLndoZW4oJy9teWN2LycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9teWN2Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTXlDdkNvbnRyb2xsZXInXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgSW5kZXhDb250cm9sbGVyKTtcclxuXHJcbiAgICBJbmRleENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gSW5kZXhDb250cm9sbGVyKCRzY29wZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB9XHJcbn0pKCk7IiwiXHJcbiIsIlxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
