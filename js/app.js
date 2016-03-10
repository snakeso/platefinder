function SearchController($scope) {

  $scope.result = '';
  
  $scope.searchByCarPlate = function() {
	$scope.result = 'searching...';
    $scope.result = 'done';
  };
  
}