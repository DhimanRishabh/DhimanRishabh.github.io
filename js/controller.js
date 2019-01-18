myapp.controller("userController",['$scope','$window','$state','$location',function($scope,$window,$state,$location){
    
    $scope.stateToggle=false;
    $scope.togglelasses=function(){
         $scope.stateToggle= !$scope.stateToggle;
    }
    
    
}])