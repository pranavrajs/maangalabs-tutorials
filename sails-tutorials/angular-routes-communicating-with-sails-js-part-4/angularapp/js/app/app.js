var employeeApp = angular.module('employeeApp', ['ngRoute']); // Defines an angular module
	//Include ngRoute for our routing purposes

	//Configure our Angular Routing 
employeeApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
							templateUrl:'home.html',
							controller:'EmployeeController'
				    })
				   .when('/profile/:profileid',{
							templateUrl:'profile.html',
							controller:'ProfileController'
					})
					.otherwise({
							redirectTo:'/'
					});
}]);


employeeApp.controller('EmployeeController',function($scope,$http,$log){
	//$log is used for console log in Angular js
	//$http is used to communicate with the server 
	//$scope defines the scope of controller
	$scope.empList=[];
	$http.get("http://localhost:1337/employee/")
		 .success(function(data){
		 	$scope.empList=data;
		 	$log.info($scope.empList);
		 });
});

employeeApp.controller('ProfileController',function($scope,$http,$log,$routeParams){
	//Store empnum in Controller
	$scope.profileid = $routeParams.profileid;
	//Initialist the employee Data
	$scope.employee={};
	//Initialise Error Handler
	$scope.notFound = false;
	//Do an API Call to findEmployeebyEmpnum with $routeParams.profileid
	$http.get("http://localhost:1337/employee/findEmployeebyEmpnum/"+$scope.profileid)
		 .success(function(data){
		 	//On successful API CALL check whether empty data is returned or not
		 	if(data.notFound === true)
		 	{
		 		//If employee not Found set error flag -- ng-show manages the rest 
		 		$scope.notFound = true;
		 		return;
		 	}
		 	//if employee found copy employee Data
		 	$scope.employee=data.userData;
		 	//Log the data
		 	$log.info(data);
		 })
		 .error(function(data){
		 	//Log error Data
		 	$log.info(data);
		 });
});