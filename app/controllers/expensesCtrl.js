(function () {
   // debugger;
   const ExpensesCtrl = function ($scope, expensesFactory) {
      $scope.sortBy = 'date';
      $scope.reverse = false;
      $scope.expenses = []

      $scope.doSort = function (propName) {
         $scope.sortBy = propName;
         $scope.reverse = !$scope.reverse;
      };

      function init() {
         expensesFactory.getExpenses().then(data => {
            console.log(data);
            return $scope.expenses = data;
         });
      };

      // delete a row
      $scope.delete = function (index) {
         $scope.expenses.splice($scope.expenses[index], 1);
      };
      // edit a row
      $scope.edit = function (index) {
         console.log($scope.expenses[index]);
         // $scope.expenses.selected = angular.copy($scope.expenses[index]);
      };

      init();

   };

   ExpensesCtrl.$inject = ['$scope', 'expensesFactory'];

   angular.module('expenseTrackerApp').controller('ExpensesCtrl', ExpensesCtrl);

}());
