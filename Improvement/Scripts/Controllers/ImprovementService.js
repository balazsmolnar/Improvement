angular.module('app').service('ImprovementService', ['$http', '$q', function ($http, $q) {

    this.getAllImprovements = function () {
        var deferred = $q.defer();
        $http.get('/Api/Improvement/').success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.addImprovement = function (improvement) {

        var deferred = $q.defer();
        $http.post('/Api/Improvement/', improvement).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.editImprovement = function (improvement) {

        var deferred = $q.defer();
        $http.post('/Api/Improvement/', improvement).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

}]);