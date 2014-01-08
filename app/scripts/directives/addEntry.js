'use strict';

angular.module('SimpleDirectoryModule')
    .directive('addEntry', ['simpleDirectoryService', function (simpleDirectoryEntries) {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                element.bind('click', function() {
                    scope.clicked = true;

                    var entry = {
                        name: scope.entry.name,
                        phone: scope.entry.phone,
                        website: scope.entry.website
                    };

                    simpleDirectoryEntries.add(entry);
                });
             }
        };
    }]);