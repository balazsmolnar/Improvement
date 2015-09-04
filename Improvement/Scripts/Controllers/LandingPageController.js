

var LandingPageController = function ($scope, $rootScope, $http, $route, ImprovementService, $location) {

    $scope.quote = '“There is only one corner of the universe you can be certain of improving, and that\'s your own self.” - Aldous Huxley';

    $scope.reload = function () {
        ImprovementService.getAllImprovements().then(function (data) {

            var expandedImprovements = new Array();
            if ($rootScope.improvements !== undefined) {
                for (index = 0; index < $rootScope.improvements.length; ++index) {
                    if ($rootScope.improvements[index].expanded === true) {
                        expandedImprovements.push($rootScope.improvements[index].Id);
                    }
                }
            }

            for (index = 0; index < data.length; ++index) {
                if (expandedImprovements.indexOf(data[index].Id) > -1) {
                    data[index].expanded = true;
                }
            }
            $rootScope.improvements = data;

        });
    };

    $scope.submitForm = function () {
        ImprovementService.addImprovement({ title: $scope.formtitle, description: $scope.formdescription });
        $location.path("/");
    };


    $scope.increasePoint = function (id) {
        ImprovementService.increasePoints(id);
        $scope.reload();
    };

    $scope.decreasePoint = function (id) {
        ImprovementService.decreasePoints(id);
        //$route.reload();
        $scope.reload();
    };

    $scope.getUserName = function () {
        ImprovementService.getUserName().then(function(data) {
            $scope.loggedInUser = data.replace(/['"]+/g, '');
        });
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

    $scope.reload();
    $scope.getUserName();
    $scope.myImprovementsOnly = false;
}

angular.module('app').filter('ownImprovement', function () {
    return function (items, filterActive, userName) {
        var filtered = [];
        if (filterActive == false)
            return items;
        angular.forEach(items, function (item) {
            if (item.Owner == userName) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});

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