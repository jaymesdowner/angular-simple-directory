'use strict';

describe('Directive: addEntry', function () {

    // load the directive's module
    beforeEach(module('simpleDirectoryApp'));

    var $compile, $rootScope, entry;

    beforeEach(inject(
        ['$compile','$rootScope', function ($c, $r) {
            $compile = $c;
            $rootScope = $r;
            entry = {
                name: 'Joe',
                phone: 'Biden',
                website: 'http://www.whitehouse.gov'
            };
        }]
    ));

    it('should respond to a click', function () {
        var element = $compile('<add-entry></add-entry>')($rootScope);
        $rootScope.entry = entry;
        jQuery(element).click();
        expect(element.scope().clicked).to.equal(true);
    });
});
