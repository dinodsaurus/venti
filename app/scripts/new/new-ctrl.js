'use strict';

angular.module('venti')
    .controller('NewCtrl', function ($scope, $log, UserFactory, OrdersFactory, $location, $routeParams) {
        if(!UserFactory.user.displayName){
            $location.path("/");
            return;
        }
        $scope.helper.list = false;
        $scope.item = {};
        var id = $routeParams.id;
        if(id){
            OrdersFactory.getOrder(id).then(function (data) {
                $log.info(data);
                data.datum = new Date(data.datum);
                data.datumOd = new Date(data.datumOd);
                data.datumDo = new Date(data.datumDo);
                $scope.item = data;
            });
        }
        $scope.save = function () {
            OrdersFactory.saveOrder($scope.item).then(function (data) {
                $location.path("/orders");
            })
        }
        $scope.dateOptions = {
            changeYear: true,
            changeMonth: true,
            yearRange: '2000:-0',
            showAnim: "fadeIn",
            dateFormat: 'dd.mm.yy'
        };
    });
