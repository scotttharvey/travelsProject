angular.module('devmtnTravel').controller("locationsCtrl", function($scope, mainSrv){
  $scope.allInfo = mainSrv.travelInfo;
})
