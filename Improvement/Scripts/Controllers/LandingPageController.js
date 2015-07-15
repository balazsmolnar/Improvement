

var LandingPageController = function ($scope, $http, ImprovementService) {

    $scope.helloAngular = 'I work!';
    ImprovementService.getList().then(function (data) { $scope.movies = data; });
}

angular.module('app').controller('LandingPageController', LandingPageController);