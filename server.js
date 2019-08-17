const express = require("express");
const mongojs = require("mongojs");
const app = express();
const PORT = process.env.PORT || 3001;
const databaseUrl = "mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge";
var collections = ["Titles"];


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

app.get("/api/movie/:TitleName", function (req, res) {
    console.log(req.params);
  // Query: In our database, go to the Movies collection, then "find one with the name from the params"
  db.Titles.findOne(req.params, function (err, movieDoc) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(movieDoc);
    }
  });
});

// const URL = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';



// Add routes, both API and view
// Connect to the Mongo DB
/*mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge
*/
/*
const databaseUrl = "mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge";
const db = mongojs(databaseUrl);
const Movie = db.collection('Titles');

db.on('connect', function () {
  console.log('database connected')
});
db.on("error", function (error) {
  console.log("Database Error:", error);
});*/
// Start the API server



/*app.get("/api/movie/:movie", function (req, res) {

  console.log("here");
  console.log(req.params.movie);
  const movie =  req.params.movie;

  res.json({params: req.params.movie});
  // console.log(req.param);
  db.Movie.find(function (err, docs) {
    res.json(docs);
  });

});*/

app.listen(PORT, () =>
  console.log(`🌎  Express Server Listening on http://localhost:${PORT}!`)
);
//
// 2. At the "/all" path, display every entry in the animals collection
/*
app.get("/all", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.animals.find({}, function (error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});
*/

// 3. At the "/name" path, display every entry in the animals collection, sorted by name
/*app.get("/name", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  db.animals.find().sort({name: 1}, function (error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});*/

// 4. At the "/weight" path, display every entry in the animals collection, sorted by weight
/*pp.get("/weight", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by weight (-1 means descending order)
  db.animals.find().sort({weight: -1}, function (error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});*/

// Set the app to listen on port 3000
/*
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
*/
