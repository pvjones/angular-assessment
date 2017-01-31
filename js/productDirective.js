angular.module('assessment').directive('product', function() {
  return {
    scope: true,
    restrict: 'E',
    templateUrl: "../views/product-tmpl.html"
  }

})