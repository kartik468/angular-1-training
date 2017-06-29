(function() {
    var myApp = angular.module('myApp', []);

    // ng-show & ng-hide directives
    myApp.directive('sectionOne', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/section-one.html',
            controller: 'sectionOneController'
        };
    });

    myApp.controller('sectionOneController', ['$scope', function($scope) {

    }]);


    // ng-class directive
    myApp.directive('sectionTwo', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/section-two.html',
            controller: 'sectionTwoController'
        };
    });

    myApp.controller('sectionTwoController', ['$scope', function($scope) {
        $scope.availableClasses = ['class1', 'class2']
        $scope.currentFontSize = 50;

        $scope.myColor = 'yellow';
    }]);


    // ng-repeat directive
    myApp.directive('sectionThree', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/section-three.html',
            controller: 'sectionThreeController'
        };
    });

    myApp.controller('sectionThreeController', ['$scope', function($scope) {
        $scope.todos = [{
            action: "Get groceries",
            complete: false,
            assignedTo: ["Martin", "Steve"]
        }, {
            action: "Call plumber",
            complete: false,
            assignedTo: ["Joe", "Steve"]
        }, {
            action: "Buy shoes",
            complete: false,
            assignedTo: ["Martin", "Bruce"]
        }, {
            action: "Buy flowers",
            complete: false,
            assignedTo: ["Martin", "Steve"]
        }, {
            action: "Call",
            complete: false,
            assignedTo: ["Martin", "Joe"]
        }];
    }]);


    // ng-options directive
    myApp.directive('sectionFour', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/section-four.html',
            controller: 'sectionFourController'
        };
    });

    myApp.controller('sectionFourController', ['$scope', function($scope) {
        $scope.employeeList = [
          {empid: 1, name: "Richard", place:"Manchester"},
          {empid: 2, name: "Joe", place:"Bristol"},
          {empid: 3, name: "Vincent", place:"California"},
          {empid: 4, name: "Graham", place:"London"},
          {empid: 5, name: "Chris", place:"Auckland"},
        ]
    }]);


    // ng-include directive
    myApp.directive('sectionFive', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/section-five.html',
            controller: 'sectionFiveController'
        };
    });

    myApp.controller('sectionFiveController', ['$scope', function($scope) {
        $scope.books = [
          { id: 1, name: "Wings of Fire"},
          { id: 2, name: "Sleepless in Seattle"},
          { id: 3, name: "The Terminal"}
        ]
    }]);
}());
