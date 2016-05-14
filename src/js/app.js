var myApp = angular.module('myApp',[
	'ngRoute'

]);

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'views/landing.html',
		controller:'LandingController'
	}).when('/login', {
		templateUrl:'views/login.html',
		controller: 'LoginController'
	}).when('/registration', {
		templateUrl:'views/registration.html',
		controller:'RegistrationController'
	}).otherwise({
		redirectTo: 'views/landing.html'
	});
});






