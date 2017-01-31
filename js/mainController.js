angular.module('assessment').controller("mainController", function($scope, mainService) {

getProducts();

function getProducts() {
  mainService.getProducts().then(function(response) {
    $scope.products = response.data;
    console.log($scope.products);
  })
}

$scope.showImage = true;



});