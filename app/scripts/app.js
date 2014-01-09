'use strict';

angular.module('simpleDirectoryApp', ['ngSanitize', 'ngRoute', 'sdCrud'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
		when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' }).
		otherwise({ redirectTo: '/' });
	}
]);

angular.module('sdCrud', ['LocalStorageModule']);