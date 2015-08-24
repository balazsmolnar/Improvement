

/// <reference path="../scripts/angular.js" />
/// <reference path="../scripts/angular-mocks.js" />
/// <reference path="../scripts/app.js" />
/// <reference path="../scripts/Controllers/LandingPageController.js" />

describe('When using LandingPageController ', function() {


    //initialize Angular

    beforeEach(function() {

        angular.module('app');
        ////parse out the scope for use in our unit tests.
        
    });

    it('quote is from huxley', function () {
       // angular.mock.inject(function($rootScope, $controller) {});


            //var scope = $rootScope.$new();
            //var ctrl = $controller('LandingPageController', { $scope: scope });
        //});
        //angular.module('app');

        //fail("hello");
        //console.log("hello");
        expect(window.jasmine).toBe(true);
//        expect(scope.quote.indexOf("Huxley")).toBeGreaterThan(-1);
    });
});