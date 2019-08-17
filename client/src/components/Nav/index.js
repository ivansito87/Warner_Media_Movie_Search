import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    // Modal if I have time :D
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <h4 className="navbar-brand" to="/">
          Warner Media Movie Search
        </h4>
        <div className={`navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <Link
                onClick={this.props.handleSaved}
                className="btn btn-outline-warning pull-right"
                to=""
              >
                My Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
