myApp.controller('SettingsController', ['$scope', function($scope) {
	$scope.settings = {};

	$scope.updateSettings = function() {
		console.log('update settings was called');
	}
}]);