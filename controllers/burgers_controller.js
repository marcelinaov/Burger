//Set up express connection
var express = require('express');

var router = express.Router();
//Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Express get route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Express post route
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

//Express put route
router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

//Express routes for server.js to use.
module.exports = router;