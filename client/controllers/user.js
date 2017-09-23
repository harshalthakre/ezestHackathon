var myApp=angular.module('myApp')

myApp.controller('UserController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
  console.log("controller Loaded");

  $scope.getUser=function(){

  }

  $scope.checkUser=function(){
    var emaili=$scope.user.email;
  $http.get('/api/user/'+emaili).then(successCallback, errorCallback);
  function successCallback(response){
    window.location.href="<h1>hello Welcome</h1>";
    }
    function errorCallback(error){
    //error code
  }
}


})
