'use strict';

angular.module('venti')
    .controller('ListCtrl', function ($scope, $log, UserFactory, $location, OrdersFactory, Pagination) {
        if(!UserFactory.user.displayName){
            $location.path("/");
            return;
        }
        $scope.helper.list = true;
        OrdersFactory.getAllOrders().then(function (data) {
            $scope.orders = data;
            $scope.pagination = Pagination.getNew(2);
            $scope.pagination.numPages = Math.ceil($scope.orders.length/$scope.pagination.perPage);
        });
        $scope.singleView = function (id) {
            $location.path("/order/" + id);
        }
    });
