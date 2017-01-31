angular.module('assessment').controller('detailController', function($scope, $stateParams, mainService) {

  getProductDetail($stateParams.id);

  function getProductDetail(id) {
    mainService.getProductDetail(id).then(function(response) {
      $scope.productDetail = response.data;
    })
  }

  console.log("product detail controller loaded");

})