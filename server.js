var express = require("express");
var bodyParser = require("body-parser");

var session = require("express-session");
var passport = require("./config/passport.js");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));
// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set Handlebars
var exphbs = require("express-handlebars"); 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Sessions will keep track of user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); // NEED TO FIX
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access 
var routes = require("./controllers/placesController.js");
app.use(routes);

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// require("./controllers/placesController.js")(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});