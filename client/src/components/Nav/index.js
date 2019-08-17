import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    /*open: false,
    width: window.innerWidth*/
  };

  /*updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };*/

  // toggleNav = () => {
  //   this.setState({ open: !this.state.open });
  // };

  /*componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }*/
render(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <Link className="navbar-brand" to="/">
        Warner Media
      </Link>
      <button
        onClick={""}
        className="navbar-toggler"
        data-toggle="collapse"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"/>
      </button>
      <div className={`navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={""}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={this.props.handleSaved}
              // className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              className="nav-link active"
              to=""
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}

export default Nav;
