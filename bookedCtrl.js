angular.module('devmtnTravel').controller("bookedCtrl", function($scope , mainSrv, $state){
$scope.idObj = $state.params.id;

  for (var i = 0; i < mainSrv.travelInfo.length; i++) {

    if(mainSrv.travelInfo[i].id === Number($scope.idObj)){
      $scope.image = mainSrv.travelInfo[i].image
  }
}
})
