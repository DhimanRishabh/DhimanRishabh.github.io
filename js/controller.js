myapp.controller("userController",['$scope','$window','$state','$location',function($scope,$window,$state,$location){
    
    
    $scope.openMenu=function(){
        
       
          
            $('button').toggleClass('active');
  $('.title').toggleClass('active');
  $('nav').toggleClass('active');
    
    }
    
    
}])