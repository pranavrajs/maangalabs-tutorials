var employeeApp = angular.module('employeeApp', []); // Defines an angular module

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