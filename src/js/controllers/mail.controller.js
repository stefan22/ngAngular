myApp.controller('MailController',['$scope', '$http', function($scope,$http) {
	$scope.email = [];

	$http({
		method: 'GET',
		url:'src/js/data.json'
	}).
	success(function(data,status,header) {
		$scope.email = data.all;
	}).
	error(function(data,status,header) {
		console.log("problemas");
	});
		
}]);




