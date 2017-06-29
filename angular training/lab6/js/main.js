(function() {
    var myApp = angular.module('myApp', []);

    myApp.directive('lab6', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/lab6.html',
            controller: 'labController'
        };
    });

    myApp.controller('labController', ['$scope', function($scope) {
      $scope.user1 = {
        id: 1,
        name: "Graham",
        address: {
          city: "London",
          state: "United Kingdom",
          pincode: 1111
        },
        friends: ["Allan", "Steve"]
      };

      $scope.user2 = {
        id: 2,
        name: "Chris",
        address: {
          city: "Bristol",
          state: "United Kingdom",
          pincode: 2222
        },
        friends: ["Graham", "Tom"]
      };
    }]);

    // isolated scope
    myApp.directive('userInfoCard', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/user-info.html',
            controller: 'userInfoController',
            scope: {
              user: "="
            }
        };
    });

    myApp.controller('userInfoController', ['$scope', function($scope) {
      $scope.userIdVisible = true;

      $scope.showUserId = function() {
        $scope.userIdVisible = true;
      };

      $scope.hideUserId = function() {
        $scope.userIdVisible = false;
      }
    }]);
}());
