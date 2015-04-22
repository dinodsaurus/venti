"use strict";
angular.module("venti")
    .factory("OrdersFactory", function ($http, $q) {
        var ORDER_API = "/api/order";
        return {
            saveOrder: function (item) {
                var deferred = $q.defer();
                $http({method: "POST", url: ORDER_API, data: item}).
                    success(function(data) {
                        deferred.resolve(data);
                    }).
                    error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            putOrder: function (item) {
                var deferred = $q.defer();
                $http({method: "PUT", url: ORDER_API + "/" + item._id, data: item}).
                    success(function(data) {
                        deferred.resolve(data);
                    }).
                    error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            getOrder: function(key) {
                var deferred = $q.defer();
                $http({method: "GET", url: ORDER_API + "/" + key}).
                    success(function(data) {
                        deferred.resolve(data);
                    }).
                    error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            getAllOrders: function() {
                var deferred = $q.defer();
                $http({method: "GET", url: ORDER_API }).
                    success(function(data) {
                        deferred.resolve(data);
                    }).
                    error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
    });
