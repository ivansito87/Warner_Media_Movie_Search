// ===============================================================================
// Routing Modularization is awesome!
// ===============================================================================

module.exports = function (app, db) {
  app.get("/api/movie/:TitleName", function (req, res) {

    // Query: In our database, go to the Movies collection,
    // then "find one with the name from the params"
    db.Titles.findOne(req.params, function (err, movieDoc) {

      // Log any errors if the server encounters one
      if (err) console.log(err);
      // Otherwise, send the result of this query to the browser
      res.json(movieDoc);
    });
  });

  app.get("/api/all", function (req, res) {

    // Query: In our database, find all the movies and send them to browser
    db.Titles.find({}, function (err, allMovies) {

      // Log any errors if the server encounters one
      if (err) console.log(err);
      // Otherwise, send the result of this query to the browser
      res.json(allMovies);
    });
  });
};

// ===============================================================================
// End of Routs
// ===============================================================================