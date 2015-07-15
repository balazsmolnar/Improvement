angular.module('app').service('ImprovementService', ['$http', '$q', function ($http, $q) {

    this.getAllImprovements = function () {
        var deferred = $q.defer();
        $http.get('/Api/Improvement/').success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
     }
}]);