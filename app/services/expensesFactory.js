(function () {
   // debugger;
   const expensesFactory = function ($http) {

      const factory = {};

      factory.getExpenses = function () {
         return $http.get('http://127.0.0.1:5500/data.json')
            .then((response) => {
               return response.data.expenses;
            });
      };
      factory.getNewExpenseForm = function () {
         return $http.get('add_new_expense')
      };

      return factory;
   };

   expensesFactory.$inject = ['$http'];

   angular.module('expenseTrackerApp').factory('expensesFactory', expensesFactory);
}());