'use strict';

angular.module('SimpleDirectoryModule')
.controller('MainCtrl', ['$scope', 'simpleDirectoryService', function($scope, simpleDirectoryService)
{
    $scope.entries = simpleDirectoryService.get();
    $scope.entry = {};

    $scope.$on('entries.added', function() {
        $scope.$apply(function() {
            $scope.entries = simpleDirectoryService.get();
            $scope.entry = {};
        });
    });
}]);