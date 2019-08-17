import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {List} from "../components/List";
import Nav from "../components/Nav";


class Home extends Component {

  state = {
    movies: [],
    image: null,
    website: null,
    query: "",
    favoriteMovies: [],
    message: "Search For A Movie To Begin!"
  };

  resetState = () => {
    this.setState({
      movies: [],
      image: null,
      query: "",
      message: "Search For A Movie To Begin!"
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.resetState();
    this.getMovie();
  };

  getMovie = () => {
    API.getMovie(this.state.query)
      .then(res => {
        API.image(res.data.TitleName)
          .then(response => {
            const movie = res.data;
            movie.image = response.data.Poster;
            movie.website = response.data.Website;
            this.setState({movies: [...this.state.movies, movie]})
          })
          .catch(err => console.log(err.message));
        console.log("logging state ->", this.state.movies);
      })
      .catch(() =>
        this.setState({
          movies: [],
          message: "No Movies Found, Try a Different Query"
        })
      );
  };

  handleMoveFavorite = (movie) => {
    movie.image = movie.image ? movie.image : require("../images/imageNotFound.jpg");
    this.setState({
      favoriteMovies: [...this.state.favoriteMovies, movie]
    }, () => {
    })
  };

  handleSaved = e => {
    e.preventDefault();
    this.resetState();
    if (!this.state.favoriteMovies.length) {
      this.setState({message: "Oops! no movies saved  🤡"})
    }
    console.log(this.state.favoriteMovies);
  };


  getThemAll = event => {
    API.getAll()
      .then(res => res.data.forEach(movie => {
        API.image(movie.TitleName)
          .then(res => {
            movie.image = res.data.Poster;
            movie.website = res.data.Website;
            this.setState({movies: [...this.state.movies, movie]})
          })
          .catch(err => console.log(err.message));
      }))
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <>
        <Nav handleSaved={this.handleSaved}
        />
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>Hi, My Name is Ivan Rendon<br/> Welcome to my Movie Search</strong>
                </h1>
                <h2 className="text-center">Search for and Save Movies of your Interest.</h2>
              </Jumbotron>
            </Col>
            <Col size="md-12">
              <Card title="Movie Search" icon="fas fa-video">
                <Form
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  getThemAll={this.getThemAll}
                  query={this.state.query}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Results">
                {(this.state.movies.length || this.state.favoriteMovies.length) ? (
                  <List>
                    {(this.state.movies.length ?
                      this.state.movies :
                      this.state.favoriteMovies).map(movie => (
                      <Movie
                        key={movie.TitleName}
                        TitleName={movie.TitleName}
                        description={movie.Storylines[0].Description}
                        image={movie.image || require("../images/imageNotFound.jpg")}
                        link={movie.website}
                        Button={() => (
                          <button
                            onClick={() => this.handleMoveFavorite(movie)}
                            className="btn btn-outline-primary ml-2 pull-right">
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row>
          <Footer/>
        </Container>
      </>
    );
  }
}

export default Home;
