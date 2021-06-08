(function () {

    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'tableController',
                templateUrl: 'app/views/table.html'
            })
            .otherwise({ redirectTo: '/' });
    });

}());