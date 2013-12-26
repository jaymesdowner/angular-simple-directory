'use strict';

angular.module('SimpleDirectoryModule')
    .directive('addEntry', ['simpleDirectoryService', function (simpleDirectoryEntries) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function() {
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