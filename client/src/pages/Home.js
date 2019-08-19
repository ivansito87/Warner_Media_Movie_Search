import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Movie from "../components/Movie";
import Footer from "../components/Footer/index";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {List} from "../components/List";
import Nav from "../components/Nav";
import "./style.css";


class Home extends Component {

  state = {
    movies: [],
    image: null,
    website: null,
    query: "",
    favoriteMovies: [],
    message: "Search for and Save Movies of your Interest"
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
    if (!this.state.query) this.setState({message: "🤦🏻‍♂️ You forgot to type a movie 😒"});
    API.getMovie(this.state.query)
      .then(res => {
        console.log(res.data);
        (res.data === null) ? this.setState({message: "Oh Snap! We don't have that one 💩"}) :
          API.image(res.data.TitleName)
            .then(response => {
              const movie = res.data;
              movie.image = response.data.Poster;
              movie.website = response.data.Website;
              this.setState({movies: [...this.state.movies, movie], message: "Hakuna Matata 🥳 we have that one 🎉"})
            })
            .catch(err => console.log(err.message));
        console.log("logging state ->", this.state.movies);
      })
      .catch(() =>
        this.setState({
          movies: [],
        })
      );
  };

  handleMoveFavorite = (event, movie) => {
    event.target.classList.toggle("disabled"); /// add Class
    event.target.setAttribute("disabled", "true"); /// set Attribute
    console.log("buttton", event.target);
    // if(favori)
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
      this.setState({message: "Hmm, have you saved any 🤔"})
    }
  };

  getThemAll = event => {
    event.preventDefault();
    API.getAll()
      .then(res => res.data.forEach(movie => {
        API.image(movie.TitleName)
          .then(res => {
            movie.image = res.data.Poster;
            movie.website = res.data.Website;
            movie.actors = res.data.Actors;
            movie.genre = res.data.Genre;
            movie.released = res.data.Released;
            movie.director = res.data.Director;
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
              <Jumbotron className="fluid">
                <h1 className="text-center display-4 font-weight-bold">
                  <strong><span className="ivan">Hi,</span> My Name is<span
                    className="ivan"> Ivan Rendon</span><br/> Welcome to my Movie Search</strong>
                </h1>
                <h1 className="text-center display-5 font-weight-bold">{this.state.message}</h1>
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
                        producer={movie.director}
                        release={movie.released}
                        actors={movie.actors}
                        genre={movie.genre}
                        Button={() => (
                          <button
                            onClick={(event) => this.handleMoveFavorite(event, movie)}
                            className="btn btn-outline-primary ml-2 pull-right">
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h1 className="text-center display-5 font-weight-bold">{this.state.message}</h1>
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
