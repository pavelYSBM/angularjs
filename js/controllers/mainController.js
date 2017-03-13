// create angular controller
validationApp.controller('ExampleController', ['$scope', function($scope) {
        $scope.master = {};
        $scope.allUsers = [];

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.add = function(user) {
            $scope.allUsers.push(user);
            $scope.user = {};
        };

        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }])
    .directive('allUsers', function() {
        return {
            restrict: "E",
            replace: false,
            scope: {
                user: "=infoData"
            },
            template: [
                '<p>User Info</p>',
                '<p>Your name: {{user.name}}</p>',
                '<p>Your email: {{user.email}}</p>',
                '<p>Your email: {{user.gender}}</p>',
            ].join("")
        };
    });
