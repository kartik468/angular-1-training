(function() {
	var myApp = angular.module('myApp', []);

	myApp.controller('MessageController', ['$scope', function ($scope) {
		$scope.Message = "Hello World";
	}]);
}());