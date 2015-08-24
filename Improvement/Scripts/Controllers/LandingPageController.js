

var LandingPageController = function ($scope, $http, $route, ImprovementService) {

    $scope.quote = '“There is only one corner of the universe you can be certain of improving, and that\'s your own self.” - Aldous Huxley';

    $scope.reload = function () {
        ImprovementService.getAllImprovements().then(function (data) {
            var expandedImprovements = new Array();
            if ($scope.improvements !== undefined) {
                for (index = 0; index < $scope.improvements.length; ++index) {
                    if ($scope.improvements[index].expanded === true) {
                        expandedImprovements.push($scope.improvements[index].Id);
                    }
                }
            }
            for (index = 0; index < data.length; ++index) {
                if (expandedImprovements.indexOf(data[index].Id) > -1) {
                    data[index].expanded = true;
                }
            }
            $scope.improvements = data;

        });
    };

    $scope.reload();

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle, description: $scope.formdescription });
    };


    $scope.increasePoint = function (id) {
        ImprovementService.increasePoints(id);
        //$route.reload();
        $scope.reload();
    };

    $scope.decreasePoint = function (id) {
        ImprovementService.decreasePoints(id);
        //$route.reload();
        $scope.reload();
    };

    $scope.toggleImprovement = function (id) {
        for (index = 0; index < $scope.improvements.length; ++index) {
            if ($scope.improvements[index].Id == id) {
                if ($scope.improvements[index].expanded === undefined || $scope.improvements[index].expanded === false)
                    $scope.improvements[index].expanded = true;
                else
                    $scope.improvements[index].expanded = false;                
            }
        }
    };

    $scope.range = function (n) {
        if (n == 0 || n=== undefined)
            return undefined;
        return new Array(n);
    };

}

angular.module('app').controller('LandingPageController', LandingPageController);