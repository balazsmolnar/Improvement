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
        }).error(function(data, status, headers, config) {
             alert("Error adding points.");
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

    this.addComment = function (id, commentText) {

        var deferred = $q.defer();
        var body = { Content: commentText };

        $http.post('/Api/Improvement/AddComment/'+id, body).success(function (data, status, headers, config) {
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

    this.getFreePoints = function () {

        var deferred = $q.defer();
        $http.get('/Api/Improvement/GetFreePoints/').success(function (data, status, headers, config) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }


}]);