

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

var EditImprovementController = function ($scope, $http, $route, $routeParams, ImprovementService) {

    for (index = 0; index < $scope.improvements.length; ++index) {
        if ($scope.improvements[index].Id == $routeParams.Id) {
            $scope.formtitle = $scope.improvements[index].Title;
            $scope.formdescription = $scope.improvements[index].Description;
        }
    }


    $scope.submitEditForm = function () {
        ImprovementService.editImprovement({
            Id:  $routeParams.Id, Title: $scope.formtitle, Description: $scope.formdescription });
    };
}

angular.module('app').controller('LandingPageController', LandingPageController);
angular.module('app').controller('EditImprovementController', EditImprovementController);