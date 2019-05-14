//Request require dependencies.
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//Setting up port connection.
var port = process.env.PORT || 8080;

//Creating Express server.
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

//Requiring handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);