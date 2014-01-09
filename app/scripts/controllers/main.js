'use strict';

angular.module('simpleDirectoryApp').controller('MainCtrl', function($scope, sdCrudService)
{
    $scope.entries = sdCrudService.get();
    $scope.entry = {};

    $scope.$on('entries.added', function() {
        $scope.$apply(function() {
            $scope.entries = sdCrudService.get();
            $scope.entry = {};
        });
    });
});