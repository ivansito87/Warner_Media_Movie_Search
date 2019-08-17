import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";
export default {

  // Gets books from the Google API
  getAll: function() {
    return axios.get("/api/all");
  },
  /*
 // Gets all saved books
 getSavedBooks: function() {
   return axios.get("/api/books");
 },
 // Deletes the saved book with the given id
 deleteBook: function(id) {
   return axios.delete("/api/books/" + id);
 },
 // Saves an book to the database
 saveBook: function(bookData) {
   return axios.post("/api/books", bookData);
 }
 */

  getMovie: function (movie) {
    return axios.get("/api/movie/" + movie)
  },

  image: function (title) {
    return axios.get(BASEURL + title + APIKEY);
  }

};
