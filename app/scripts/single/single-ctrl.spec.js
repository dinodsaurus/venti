"use strict";

describe("Venti Single", function(){
  var scope,controller;

  beforeEach(module("venti"));

  describe("Controller tests",  function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("SingleCtrl", {
        $scope: scope
      });
    }));

    it("should not have a defined list", function() {
      expect(scope.helper.list).toBeFalsy();
      expect(scope.dateOptions.changeYear).toBeTruthy();
      expect(scope.dateOptions.changeMonth).toBeTruthy();
      expect(scope.dateOptions.yearRange).toBe("2000:-0");
    });

    it("should edit entry", function () {
      scope.order.datum = "01.03.2005";
      scope.order.datumOd = "01.03.2005";
      scope.order.datumDo = "01.03.2005";
      scope.edit("Test");
      expect(scope.helper.edit).toBe("Test");
    });

  });
});
