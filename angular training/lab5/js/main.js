(function() {
    var myApp = angular.module('myApp', []);

    // Using Angular JS in-built filters
    myApp.directive('myDirective', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/partial1.html',
            controller: 'myController'
        };
    });

    myApp.controller('myController', ['$scope', function($scope) {
      $scope.products = [
        { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
        { name: "Bananas", category: "Fruit", price: 1.42, expiry: 7 },
        { name: "Pears", category: "Fruit", price: 1002.02, expiry: 6 },
        { name: "Tuna", category: "Fish", price: 20.45, expiry: 5 },
        { name: "Salmon", category: "Fish", price: 102.0, expiry: 4 },
        { name: "Drink", category: "Fish", price: 12.0, expiry: 4 },
        { name: "Beer", category: "Drink", price: 13.20, expiry: 3 },
        { name: "Wine", category: "Drink", price: 15.20, expiry: 3 },
        { name: "Whiskey", category: "Drink", price: 1.20, expiry: 365 }
      ];
    }]);

    myApp.filter('skipFilter', [function() {
      return function(products, skipNumber) {
        return products.slice(skipNumber);
      };
    }]);
}());
