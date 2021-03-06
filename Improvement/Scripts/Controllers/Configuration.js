﻿var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'Home/ImprovementList',
            controller: 'LandingPageController'
        }).
        when('/Add', {
            templateUrl: 'Home/AddImprovement'
        }).
        when('/Edit/:Id', {
            templateUrl: function (params) { return 'Home/EditImprovement/id=' + params.id; }
        });
}

configFunction.$inject = ['$routeProvider'];

angular.module('app').config(configFunction);