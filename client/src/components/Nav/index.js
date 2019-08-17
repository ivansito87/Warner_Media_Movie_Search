import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    // Modal if I have time :D
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="http://origin-www.timewarner.com/sites/default/files/ckeditor/public/files/att_wm_hz_pref_rgb_pos.png" width="400" height="30"
                 className="d-inline-block align-top" alt="" />

            <span className="font-weight-bold">{""}</span>

          </a>
          {/*<a className="navbar-brand" href="#">
            <img src={require("../../images/imageNotFound.jpg")} width="30" height="30" alt="" />
          </a>*/}
          <Link
            onClick={this.props.handleSaved}
            className="btn btn-outline-warning pull-right"
            to=""
          >
            My Movies
          </Link>
        </nav>
      {/*<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
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
      </nav>*/}
      </div>
    );
  }
}

export default Nav;
