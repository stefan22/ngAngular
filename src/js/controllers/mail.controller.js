myApp.controller('MailController',['$scope', '$http', function($scope, $http) {
	$http({
	  method: 'GET',
	  url: '/js/data.json'
	}).then(function successCallback(data) {
	    $scope.all = data;	
	  }, function errorCallback(response) {
	     console.log('shit happened');
	});
}]);




/
