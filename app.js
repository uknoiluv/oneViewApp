
var app = angular.module('oneview', []);

app.controller('oneviewController', function($scope, $http){
  $scope.list = [];
  $http({method: 'GET', url: './data'}).success(function(data, status){
      $scope.list = data;
      console.log('data', data, 'status', status);
  }).error(function(data, status){
    console.log('data', data, 'status', status);
  });
});

app.directive('myTemp', function(){
  return {
    templateUrl: 'item.html',
    link: function(scope, elem, attrs){      
    }
  }
});
