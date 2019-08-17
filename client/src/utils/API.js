import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";



export default {

  // Gets All Movies from MongoDB
  getAll: function() {
    return axios.get("/api/all");
  },

  // Gets only the movie searched
  getMovie: function (movie) {
    return axios.get("/api/movie/" + movie)
  },

  // Method to query OMB to get the images from them
  // since the DB provided doesn't supply one
  image: function (title) {
    return axios.get(BASEURL + title + APIKEY);
  }

};
