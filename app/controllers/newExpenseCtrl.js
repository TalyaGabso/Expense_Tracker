(function () {
   // debugger;
   const newExpenseCtrl = function ($scope, expensesFactory) {

      $scope.expenses = [];

      $scope.addNewExpense = () => {
         $scope.expenses.push({
            date: $scope.createExpenseForm.date,
            category: $scope.createExpenseForm.category,
            description: $scope.createExpenseForm.description,
            type: $scope.createExpenseForm.type,
            amount: $scope.createExpenseForm.amount
         });
      };

      function init() {
         expensesFactory.getNewExpenseForm().then(data => {
            console.log(data);
         });
      };

      init();

   };

   NewExpensesCtrl.$inject = ['$scope', 'expensesFactory'];

   angular.module('expenseTrackerApp').controller('newExpenseCtrl', newExpenseCtrl);

}());
