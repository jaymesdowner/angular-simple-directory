angular.module('SimpleDirectoryModule')
.factory('simpleDirectoryService', ['$rootScope', 'localStorageService' , function($rootScope, localStorageService)
{
    var service = {};

    service.get = function() {
        $rootScope.$broadcast('entries.query');
        return localStorageService.get('simpleDirectoryStorageKey');
    };

    service.add = function(entry) {
        if (!localStorageService.get('simpleDirectoryStorageKey')) {
            var data = [];
        } else {
            data = localStorageService.get('simpleDirectoryStorageKey');
        }
        data.push(entry);
        localStorageService.add('simpleDirectoryStorageKey', data);
        $rootScope.$broadcast('entries.added');
    };

    return service;
}])