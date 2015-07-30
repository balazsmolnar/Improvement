

var LandingPageController = function ($scope, $http, $route, ImprovementService) {

    $scope.quote = '“There is only one corner of the universe you can be certain of improving, and that\'s your own self.” - Aldous Huxley';
    ImprovementService.getAllImprovements().then(function (data) { $scope.improvements = data; });

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle, description: $scope.formdescription });
    };


    $scope.increasePoint = function (id) {
        ImprovementService.increasePoints(id);
        $route.reload();
    };
}

angular.module('app').controller('LandingPageController', LandingPageController);