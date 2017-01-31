angular.module('assessment').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/about.html"
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "../views/blog.html"
    })
    .state('shop', {
      url: "/shop",
      controller: "mainController",
      templateUrl: "../views/shop.html"
    })
    .state('details', {
      url: "/details/:id",
      controller: "detailController",
      templateUrl: "../views/product-details.html"
    });

    $urlRouterProvider
      .otherwise('/')

})