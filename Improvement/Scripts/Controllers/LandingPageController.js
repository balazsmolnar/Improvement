angular
    .module('app')
    .controller('LandingPageController', LandingPageController);

function LandingPageController($scope, $rootScope, $http, $route, ImprovementService) {

    var vm = this;

    // data members
    vm.quote = '“There is only one corner of the universe you can be certain of improving, and that\'s your own self.” - Aldous Huxley';
    vm.loggedInUser = "";

    getUserName();

    function getUserName() {
        ImprovementService.getUserName().then(function(data) {
            vm.loggedInUser = data.replace(/['"]+/g, '');
        });
    };
}

