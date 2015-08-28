

var LandingPageController = function ($scope, $rootScope, $http, $route, ImprovementService, $location) {

    $scope.quote = '“There is only one corner of the universe you can be certain of improving, and that\'s your own self.” - Aldous Huxley';

    $scope.reload = function () {
        ImprovementService.getAllImprovements().then(function (data) {

            //if ($scope.improvements !== undefined)
            //    alert($scope.improvements[0].expanded);
            //else {
            //    alert("undeinfedzx");
            //}
            var expandedImprovements = new Array();
            if ($rootScope.improvements !== undefined) {
                for (index = 0; index < $rootScope.improvements.length; ++index) {
                    if ($rootScope.improvements[index].expanded === true) {
//                        alert("1: " + index);
                        expandedImprovements.push($rootScope.improvements[index].Id);
                    }
                }
            }

            for (index = 0; index < data.length; ++index) {
                if (expandedImprovements.indexOf(data[index].Id) > -1) {
//                    alert("2: " + index);
                    data[index].expanded = true;
                }
            }
//            alert("3");
            $rootScope.improvements = data;

        });
    };

    $scope.reload();

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle, description: $scope.formdescription });
        $location.path("/");
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
        for (index = 0; index < $rootScope.improvements.length; ++index) {
            if ($rootScope.improvements[index].Id == id) {
                if ($rootScope.improvements[index].expanded === undefined || $rootScope.improvements[index].expanded === false)
                    $rootScope.improvements[index].expanded = true;
                else
                    $rootScope.improvements[index].expanded = false;                
            }
        }
    };

    $scope.range = function (n) {
        if (n == 0 || n=== undefined)
            return undefined;
        return new Array(n);
    };

}

var EditImprovementController = function ($scope, $rootScope, $http, $route, $routeParams, ImprovementService, $location) {

    for (index = 0; index < $rootScope.improvements.length; ++index) {
        if ($rootScope.improvements[index].Id == $routeParams.Id) {
            $scope.formtitle = $rootScope.improvements[index].Title;
            $scope.formdescription = $rootScope.improvements[index].Description;
        }
    }


    $scope.submitEditForm = function () {
        ImprovementService.editImprovement({
            Id: $routeParams.Id, Title: $scope.formtitle, Description: $scope.formdescription
        });
        //$scope.reload();
        $location.path("/");
    };
}

angular.module('app').controller('LandingPageController', LandingPageController);
angular.module('app').controller('EditImprovementController', EditImprovementController);