"use strict";

describe("Venti Main", function(){
  var scope,controller;

  beforeEach(module("venti"));

  describe("Controller tests", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("MainCtrl", {
        $scope: scope
      });
    }));

    it("should not have a defined list", inject(function() {
      expect(scope.helper.list).toBeFalsy();
      expect(scope.user).not.toBeDefined();
    }));

    it("should do anonymous login", inject(function() {
      scope.anonimusLogin();
      expect(scope.user.displayName).toBe("Anoniman korisnik");
      expect(scope.user.image.url).toBe("images/anonymous.png");
    }));
  });
});
