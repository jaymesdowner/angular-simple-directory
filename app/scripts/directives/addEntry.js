'use strict';

angular.module('simpleDirectoryApp').directive('addEntry', function (sdCrudService) {
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

                sdCrudService.add(entry);
            });
         }
    };
});