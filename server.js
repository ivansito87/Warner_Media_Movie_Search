const express = require("express");
const mongojs = require("mongojs");
const app = express();
const PORT = process.env.PORT || 3001;
const databaseUrl = "mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge";
const collections = ["Titles"];
const db = mongojs(databaseUrl, collections);

// Need Images to display so I used OMD API to get
// the images and the links since the DB doesn't have them.

// Configure body parsing for AJAX requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Stabilised a connection with MongoDB
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// ================================================================================
// ROUTER
// The below line is my server with a function exported
// to have clean server I decided to pull aside the routes
// These routes give our server a "map" of how to respond to client.
require("./routes/apiRoutes")(app, db);
// ================================================================================

// ==============================================================================
// LISTENER
// Plug our app to listen ready to roll WooHoo!
app.listen(PORT, () =>
  console.log(`❤️  Express Server Listening on http://localhost:${PORT}!`)
);
// ==============================================================================
