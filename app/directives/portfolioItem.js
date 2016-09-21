
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
