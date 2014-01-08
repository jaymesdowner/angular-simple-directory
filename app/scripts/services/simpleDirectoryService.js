'use strict';

angular.module('SimpleDirectoryModule')
.factory('simpleDirectoryService', ['$rootScope', 'localStorageService' , function($rootScope, localStorageService)
{
    var service = {};

    service.get = function() {
        if (localStorageService.get('simpleDirectoryStorageKey')) {
            $rootScope.$broadcast('entries.list');
            return localStorageService.get('simpleDirectoryStorageKey');
        }
    };

    service.add = function(entry) {
        var data = [];

        if (localStorageService.get('simpleDirectoryStorageKey')) {
            data = localStorageService.get('simpleDirectoryStorageKey');
        }

        data.push(entry);
        localStorageService.add('simpleDirectoryStorageKey', data);
        $rootScope.$broadcast('entries.added');
    };

    return service;
}]);