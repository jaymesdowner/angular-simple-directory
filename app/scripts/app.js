'use strict';

angular.module('SimpleDirectoryModule', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'LocalStorageModule'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
		when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' }).
		otherwise({ redirectTo: '/' });
	}
]);