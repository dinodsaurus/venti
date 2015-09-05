"use strict";

describe("Venti New", function(){
  var scope,controller;

  beforeEach(module("venti"));

  describe("Controller tests", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("NewCtrl", {
        $scope: scope
      });
    }));

    it("should not have a defined list", inject(function() {
      expect(scope.helper.list).toBeFalsy();
      expect(scope.item).toEqual(jasmine.any(Object));
      expect(scope.dateOptions.changeYear).toBeTruthy();
      expect(scope.dateOptions.changeMonth).toBeTruthy();
    }));

  });
});
