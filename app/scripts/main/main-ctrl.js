'use strict';

angular.module('venti')
    .controller('MainCtrl', function ($scope, $log, $location, UserFactory) {
        $scope.helper = {};
        $scope.helper.list = false;
        $scope.$on('event:google-plus-signin-success', function (event,authResult) {
            gapi.client.load('plus','v1', loadProfile);
            function loadProfile(){
                var request = gapi.client.plus.people.get( {'userId' : 'me'} );
                request.execute(loadProfileCallback);
            }
            function loadProfileCallback(obj) {
                var profile = obj;

                UserFactory.user =  profile;
                $scope.user = profile;
                $scope.$apply(function () {
                    $location.path("/orders");
                });
            }

        });
    });
