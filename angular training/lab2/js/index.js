(function() {
    var myApp = angular.module('myApp', []);
    myApp.directive('simpleCalculator', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/calculator.html',
            controller: 'SimpleCalculatorController'
        };
    });

    myApp.controller('SimpleCalculatorController', ['$scope', function($scope) {
        $scope.firstNumber = 3;
        $scope.secondNumber = 3;
        $scope.operator = "*";
        $scope.decimal = true;
        $scope.result = $scope.$eval("firstNumber" + $scope.operator + "secondNumber");
        var checkOperator = function(operator) {
            var re = /^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$/;
            if (operator && typeof operator === 'string' && operator.length === 1) {
                return operator.match(re) ? true : false;
            }
            return false;
        };
        $scope.calculate = function(firstNumber, operator, secondNumber) {
            var isValidOperator = checkOperator(operator);
            try {
                $scope.result = $scope.$eval(firstNumber + operator + secondNumber);
            } catch (e) {
                $scope.result = "Parsing error";
                return $scope.result;
            }
            if (!isValidOperator) {
                $scope.result = "Invalid Operator";
                return $scope.result;
            }
            $scope.result = ($scope.decimal) ? $scope.result.toFixed(2) : parseInt($scope.result);
            return $scope.result;
        };
    }]);
}());
