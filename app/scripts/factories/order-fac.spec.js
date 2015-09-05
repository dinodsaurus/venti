"use strict";

describe("Order Service tests", function(){
  var orders,
      http;

  var ORDER_API = "http://admin.venti.hr/api/order";

  beforeEach(module("venti"));

  describe("Calendar tests", function () {
    beforeEach(inject(function(OrdersFactory, $httpBackend) {
      orders = OrdersFactory;
      http = $httpBackend;
    }));

    it("should define default time and service", function() {
      expect(orders).toBeDefined();
      expect(orders.saveOrder).toBeDefined();
    });
  });
});
