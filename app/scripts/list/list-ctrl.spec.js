"use strict";

describe("Venti List", function(){
  var scope,controller;

  beforeEach(module("venti"));

  describe("Controller tests", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("ListCtrl", {
        $scope: scope
      });
    }));

    it("should not have a defined list", inject(function() {
      expect(scope.helper).toEqual(jasmine.any(Object));
      expect(scope.helper.list).toBeTruthy();
    }));

  });
});
