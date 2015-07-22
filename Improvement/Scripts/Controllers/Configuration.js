var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/Add', {
            templateUrl: 'Home/AddImprovement',
            controller: 'LandingPageController'
        }).
        when('/Edit/:Id', {
            templateUrl: function (params) { return 'Home/EditImprovement/id=' + params.id; },
            controller: 'LandingPageController'
        });
}

configFunction.$inject = ['$routeProvider'];

angular.module('app').config(configFunction);