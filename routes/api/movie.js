const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/books"
/*router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);*/

// Matches with "/api/movies/:id"
router
  .route("/:id")
  .get(movieController.findById);
/*  .put(bookController.update)
  .delete(bookController.remove);*/

module.exports = router;
