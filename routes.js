(function() {
    'use strict';

    angular.module('base-angular').config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            });
    });
})();
