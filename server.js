// Dependencies
// =============================================================
var express = require("express");


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up our routes
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
// alternatively I could have done this:
// Add api routes
// const apiRoutes = require('./app/routing/apiRoutes');
// app.use(apiRoutes);  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});