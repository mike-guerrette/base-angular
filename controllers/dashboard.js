(function () {
    'use strict';

    angular.module('base-angular').controller('DashboardCtrl', [
        '$scope',
        function($scope) {
            $scope.message = 'Hello World!';
        }
    ]);
}());
