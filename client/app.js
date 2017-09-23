var myApp=angular.module('myApp',['ngRoute']);


myApp.config(['$routeProvider',function($routeProvider){

  $routeProvider
  .when('/',{
    controller:'UserController',
    templateUrl:''
  }).when('/users',{
    controller:'UserController',
    templateUrl:'<h1>"hello"</h1>'
  }).otherwise({
    redirectTo:''
  })
}])
