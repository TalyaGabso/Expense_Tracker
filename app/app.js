

(function () {

    const app = angular.module("expenseTrackerApp", ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ExpensesCtrl',
                templateUrl: 'app/views/expensesView.html'
            })
            .when('/expenses/add_new_expense', {
                controller: 'addExpenseCtrl',
                templateUrl: 'app/views/expensesView.html'
            })
            // .when('/expenses/:category', {
            //     controller: 'categoryCtrl',
            //     templateUrl: 'app/views/expensesView.html'
            // })
            // .when('/expenses/:month', {
            //     controller: 'monthCtrl',
            //     templateUrl: 'app/views/expensesView.html'
            // })
            .otherwise({ redirectTo: '/' });
    });

}());
