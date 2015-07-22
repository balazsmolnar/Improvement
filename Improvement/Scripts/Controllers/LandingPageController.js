

var LandingPageController = function ($scope, $http, ImprovementService) {

    $scope.helloAngular = 'I work!';
    ImprovementService.getAllImprovements().then(function (data) { $scope.improvements = data; });

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle, description: $scope.formdescription });
    };
}

angular.module('app').controller('LandingPageController', LandingPageController);