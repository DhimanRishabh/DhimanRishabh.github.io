var myapp=angular.module("myapp",['ui.router']);

myapp.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/frontView");
	$stateProvider.state('frontView',{
		url:"/frontView",
		templateUrl:"./templates/frontView.htm"
		
	});
    
    
    
	
	
	
	
}]);

