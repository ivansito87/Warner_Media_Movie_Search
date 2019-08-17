// ===============================================================================
// Routing Modularization is awesome!
// ===============================================================================

module.exports = function (app, db) {
  app.get("/api/movie/:TitleName", function (req, res) {

    // $regex options from Mongo Documentation to be case insensitive
    db.Titles.findOne({
      TitleName: {
        '$regex': req.params.TitleName,
        $options: 'i'
      }
    }, function (err, movieDoc) {

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