myApp.controller('MailController',['$scope', function($scope) {
	$scope.email = [
		{
			'id': 1,
			'from': 'joe@gmail.com',
			'to': 'jen@gmail.com',
			'subject': 'Great Job',
			'body': 'Congrats on the release of the book!'
		}
	];
}]);