angular
    .module('app')
    .controller('ImprovementListController', ImprovementListController);

function ImprovementListController($scope, $rootScope, $http, $route, ImprovementService, $location) {

    var vm = this;

    // data members
    vm.myImprovementsOnly = false;

    // function members
    vm.reload = reload;

    vm.submitForm = function (isValid) {

        alert('isValid');
        if (!isValid) {
            alert('Not valid!');
            return;
        }
        ImprovementService.addImprovement({ title: vm.formtitle, description: vm.formdescription });
        $location.path("/");
    };


    vm.increasePoint = function (id) {
        ImprovementService.increasePoints(id).then(function(data) {
            vm.reload();
        });
    };

    vm.decreasePoint = function (id) {
        ImprovementService.decreasePoints(id).then(function (data) {
            vm.reload();
        });
    };

    vm.addComment = function (id, comment) {
        ImprovementService.addComment(id, comment).then(function (data) {
            vm.reload();
        });
    };

    vm.getUserName = function () {
        ImprovementService.getUserName().then(function(data) {
            vm.loggedInUser = data.replace(/['"]+/g, '');
        });
    };

    vm.getFreePoints = function () {
        ImprovementService.getFreePoints().then(function (data) {
            vm.freePoints = data;
        });
    };

    vm.toggleImprovement = function (id) {
        for (index = 0; index < $rootScope.improvements.length; ++index) {
            if ($rootScope.improvements[index].Id == id) {
                if ($rootScope.improvements[index].expanded === undefined || $rootScope.improvements[index].expanded === false)
                    $rootScope.improvements[index].expanded = true;
                else
                    $rootScope.improvements[index].expanded = false;                
            }
        }
    };

    vm.range = function (n) {
        if (n == 0 || n=== undefined)
            return undefined;
        return new Array(n);
    };


    vm.reload();
    vm.getUserName();

    function reload() {
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
        vm.getFreePoints();
    };


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

