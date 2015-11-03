angular.
    module('app').
    controller('EditImprovementController', EditImprovementController);


function EditImprovementController($rootScope, $routeParams, $location, ImprovementService) {

    var vm = this;
    activate();

    vm.submitEditForm = function () {
        ImprovementService.editImprovement({
            Id: $routeParams.Id, Title: vm.formtitle, Description: vm.formdescription
        });
        $location.path("/");
    };

    function activate() {

        for (index = 0; index < $rootScope.improvements.length; ++index) {
            if ($rootScope.improvements[index].Id == $routeParams.Id) {
                vm.formtitle = $rootScope.improvements[index].Title;
                vm.formdescription = $rootScope.improvements[index].Description;
            }
        }
    }
}

