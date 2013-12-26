'use strict';
angular.module('SimpleDirectoryModule')
.controller('MainCtrl', ['$scope', 'simpleDirectoryService', 'localStorageService', function($scope, simpleDirectoryService, localStorageService)
{
    $scope.entries = simpleDirectoryService.get();

    $scope.$on('entries.added', function() {
        $scope.$apply(function() {
            $scope.entries = simpleDirectoryService.get();
            $scope.entry = {};
        });
    });
    $scope.entry = {};
}]);