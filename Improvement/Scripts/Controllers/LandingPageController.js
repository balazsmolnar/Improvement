

var LandingPageController = function ($scope, $http, ImprovementService) {

    $scope.helloAngular = 'I work!';
    ImprovementService.getAllImprovements().then(function (data) { $scope.movies = data; });

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle });
    };
}

angular.module('app').controller('LandingPageController', LandingPageController);