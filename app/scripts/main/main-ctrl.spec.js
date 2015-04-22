"use strict";

describe("Venti main controller", function(){
  var scope,controller;

  beforeEach(module("venti"));

  describe("List of awesome things", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("MainCtrl", {
        $scope: scope
      });
    }));

    it("should define more than 5 awesome things", inject(function() {
      expect(scope.helper.list).toBeFalsy();
    }));
  });
});
