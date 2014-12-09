angular.module('markticle').controller('MainController', function($scope, StorageService) {
  $scope.marks = StorageService.get();
  $scope.removeMark = function(url) {
    StorageService.remove(url);
    $scope.marks = StorageService.get();
    if(!$scope.$$phase) {
      $scope.$apply();
    }
  };
});
