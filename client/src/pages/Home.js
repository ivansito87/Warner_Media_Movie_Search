import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {List} from "../components/List";
import Nav from "../components/Nav";
// import axios from "axios";

class Home extends Component {
  state = {
    books: [],
    image: null,
    query: "",
    favoriteMovies: [],
    message: "Search For A Movie To Begin!"
  };

  resetState = () => {
    this.setState({
      books: [],
      image: null,
      query: "",
      message: "Search For A Book To Begin!"
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value
    });
  };

  getMovie = () => {
    API.getMovie(this.state.query)
      .then(res => {
        this.getImage(res.data.TitleName);
        // console.log(res.data);
        this.setState({
          books: [...this.state.books, res.data]
        });
        console.log("logging state ->", this.state.books);
      })
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Movies Found, Try a Different Query"
        })
      );
  };

  getImage = title => {

    API.image(title)
      .then(res => this.setState({image: res.data.Poster}))
      .catch(err => console.log(err.message));

  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.resetState();
    this.getMovie();

  };

  handleMoveFavorite = (book, image) => {
    book.image = image;
    this.setState({favoriteMovies: [...this.state.favoriteMovies, book]}, () => {
      console.log("Shishitaa -->",this.state.favoriteMovies);
    })
  };

  handleSaved = e => {
    e.preventDefault();
    this.resetState();
    if (!this.state.favoriteMovies.length) {
      this.setState({message: "Oops! no movies saved  🤡"})
    }
    console.log(this.state.favoriteMovies);
    // console.log("Chuchitoos --->");
};



  getThemAll = event => {
    API.getAll()
      .then(res => res.data.forEach(movie => {
        API.image(movie.TitleName)
          .then(res => {
            movie.image = res.data.Poster;
            this.setState({books: [...this.state.books, movie]})
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
                <strong>(React) Movie Search</strong>
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
              {(this.state.books.length || this.state.favoriteMovies.length) ? (
                <List>
                  {(this.state.books.length ? this.state.books : this.state.favoriteMovies ).map(book => (
                    <Book
                      key={book.TitleName}
                      TitleName={book.TitleName}
                      description={book.Storylines[0].Description}
                      image={this.state.image || book.image || "http://izuum.com/noimage.jpg"}
                      /*subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}*/
                      Button={() => (
                        <button
                          onClick={() => this.handleMoveFavorite(book, this.state.image)}
                          className="btn btn-primary ml-2 pull-right"
                        >
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
