
var app = angular.module('oneview');

app.controller('oneviewController', function($scope, $http){
  $http({method: 'GET', url: './data', data: userData}).success(function(data, status){
      console.log('data', data, 'status', status);
  }).error(function(data, status){
    console.log('data', data, 'status', status);
  });

});
