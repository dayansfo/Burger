// Dependencies because you are dependent on code, people wrote

var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse app/x-www-form-urlencoded extracts entire body portion of an incoming request stream and exposes it on req.body .
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.Handlebars.js is a templating engine. Based on the Mustache template language. With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them. app.use and app.METHOD functios bind application-level middleware to an instance of the app. METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase. 
var routes = require("./controllers/burger_controller.js");
// console.log(routes)
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function(){
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);

});