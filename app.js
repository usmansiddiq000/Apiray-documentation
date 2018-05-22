var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./component/home.html",
        controller : "homectrl"
    })
    .when("/home", {
        templateUrl : "./component/home.html",
        controller : "homectrl"
    })
    .when("/login", {
        templateUrl : "./component/login.html",
        controller : "loginctrl"
    })
    .when("/blue", {
        templateUrl :404
    });
});

app.controller('homectrl' , function($scope){
    
    $scope.name='usman';
});

app.controller('loginctrl' , function($scope){
   

});