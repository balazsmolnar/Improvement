var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/Add', {
            templateUrl: 'Home/AddImprovement',
            controller: 'LandingPageController'
        });
    //.when('/routeTwo/:donuts', {
    //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
    //})
    //.when('/routeThree', {
    //    templateUrl: 'routesDemo/three'
    //});
}
configFunction.$inject = ['$routeProvider'];

angular.module('app').config(configFunction);