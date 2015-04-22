"use strict";
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    autoIncrement = require("mongoose-auto-increment"),
    moment = require("moment");

var connection = mongoose.connect("mongodb://localhost/ventiDb");
autoIncrement.initialize(connection);

var Order = require("./models/order");

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser());
app.use(express.static(__dirname + "/public"));

var router = express.Router();

router.route("/order")
    .post(function(req, res) {
        var order = new Order();

        order.datum = moment(req.body.datum);
        order.narucitelj = req.body.narucitelj;
        order.predstavnik = req.body.predstavnik;
        order.telefon = req.body.telefon;
        order.napomena = req.body.napomena;
        order.adresa = req.body.adresa;
        order.datumOd = moment(req.body.datumOd);
        order.datumDo = moment(req.body.datumDo);

        order.save(function(err) {
            if (err){
              res.send(err);
            }
            res.json({ message: "Nalog created!" });
        });
    })
    .get(function(req, res) {
        Order.find(function(err, order) {
            if (err){
              res.send(err);
            }
            var or = order.reverse();
            res.json(or);
        });
    });

router.route("/order/:order_id")
    .get(function(req, res) {
        Order.findById(req.params.order_id, function(err, order) {
            if (err){
              res.send(err);
            }
            res.json(order);
        });
    })

    .put(function(req, res) {
        Order.findById(req.params.order_id, function(err, order) {

            if (err){
              res.send(err);
            }

            order.datum = moment(req.body.datum);
            order.narucitelj = req.body.narucitelj;
            order.predstavnik = req.body.predstavnik;
            order.telefon = req.body.telefon;
            order.napomena = req.body.napomena;
            order.adresa = req.body.adresa;
            order.datumOd = moment(req.body.datumOd);
            order.datumDo = moment(req.body.datumDo);

            order.save(function(err) {
                if (err){
                  res.send(err);
                }

                res.json({ message: "Order updated!" });
            });

        });
    })

    .delete(function(req, res) {
        Order.remove({
            _id: req.params.order_id
        }, function(err, order) {
            if (err){
              res.send(err);
            }

            res.json({ message: "Successfully deleted" });
        });
    });

app.use("/api", router);

app.listen(port);
