"use strict";

describe("Order", function(){
  var orders,
      http;

  var ORDER_API = "http://admin.venti.hr/api/order";

  beforeEach(module("venti"));

  describe("Service tests", function () {
    beforeEach(inject(function(OrdersFactory, $httpBackend) {
      orders = OrdersFactory;
      http = $httpBackend;
    }));

    it("should have default methods defined", function() {
      expect(orders).toBeDefined();
      expect(orders.saveOrder).not.toBeDefined();
    });
  });
});
