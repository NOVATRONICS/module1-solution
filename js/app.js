(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.messageForUser = "";
  $scope.menuList = "";
  $scope.CheckIfTooMuch = function () {
    var stringToSplit = $scope.menuList;
    var arrayOfStrings = stringToSplit.split(",");
    if (stringToSplit === "") {
        $scope.messageForUser = "Please enter data first";
    }
    else {
        if(arrayOfStrings.length <= 3) {
          $scope.messageForUser = "Enjoy!";
          }
        else {
          $scope.messageForUser = "Too much!";
        }
    }
  };
}



})();
