"use strict";

angular.module("venti")
    .controller("NewCtrl", function ($scope, $log, UserFactory, OrdersFactory, $location, $routeParams) {
        var id = $routeParams.id;
        if(!$scope.helper){
          $scope.helper = {};
        }
        $scope.helper.list = false;
        $scope.item = {};
        $scope.item.datum = new Date();
        $scope.dateOptions = {
            changeYear: true,
            changeMonth: true,
            yearRange: "2000:-0",
            showAnim: "fadeIn",
            dateFormat: "dd.mm.yy"
        };
        if(!UserFactory.user.displayName){
            $location.path("/");
            return;
        }
        if(id){
            OrdersFactory.getOrder(id).then(function (data) {
                data.datum = new Date(data.datum);
                data.datumOd = new Date(data.datumOd);
                data.datumDo = new Date(data.datumDo);
                $scope.item = data;
            });
        }
        $scope.save = function () {
            OrdersFactory.saveOrder($scope.item).then(function () {
                $location.path("/orders");
            });
        };
    });
