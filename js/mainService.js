angular.module('assessment').service('mainService', function($http) {

this.getProducts = function() {
  let productUrl = `http://practiceapi.devmounta.in/products`;
  let productReq = {
    method: 'GET',
    url: productUrl
  }
  return $http(productReq);
 }

this.getProductDetail = function(id) {
  console.log("product id from service", id);
  let productUrl = `http://practiceapi.devmounta.in/products/${id}`;
  let productReq = {
    method: 'GET',
    url: productUrl
  }
  return $http(productReq)
}

});