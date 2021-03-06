var myApp = angular.module('myApp',[
	'ngRoute'

]);

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'views/landing.html',
		controller:'LandingController'
	}).when('/settings', {
		templateUrl:'views/settings.html',
		controller:'SettingsController'
	}).when('/login', {
		templateUrl:'views/login.html',
		controller: 'LoginController'
	}).when('/email', {
		templateUrl:'views/email.html',
		controller:'MailController'
	}).when('/registration', {		
		templateUrl:'views/registration.html',
		controller:'RegistrationController'
	}).otherwise({
		redirectTo: '/'
	});
});






