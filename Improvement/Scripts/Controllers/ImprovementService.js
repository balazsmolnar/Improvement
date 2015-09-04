angular.module('app').service('ImprovementService', ['$http', '$q', function ($http, $q) {

    this.getAllImprovements = function () {
        var deferred = $q.defer();
        $http.get('/Api/Improvement/Get').success(function(data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.addImprovement = function (improvement) {

        var deferred = $q.defer();
        $http.post('/Api/Improvement/Post', improvement).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.editImprovement = function (improvement) {

        var deferred = $q.defer();
        $http.put('/Api/Improvement/Put', improvement).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.increasePoints = function (id) {

        var deferred = $q.defer();
        $http.post('/Api/Improvement/IncreasePoint/'+id).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.decreasePoints = function (id) {

        var deferred = $q.defer();
        $http.post('/Api/Improvement/DecreasePoint/' + id).success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.getUserName = function () {

        var deferred = $q.defer();
        $http.get('/Api/Improvement/GetUserName/').success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }


}]);