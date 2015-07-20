angular.module('app').service('ImprovementService', ['$http', '$q', function ($http, $q) {

    this.getAllImprovements = function () {
        var deferred = $q.defer();
        $http.get('/Api/Improvement/').success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.addImprovement = function (improvement) {

        alert(improvement.title);
        var deferred = $q.defer();
        $http.post('/Api/Improvement/', { title: improvement.title }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

}]);