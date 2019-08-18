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
          <a className="navbar-brand" href="http://www.timewarner.com/">
            <img
              src="http://origin-www.timewarner.com/sites/default/files/ckeditor/public/files/att_wm_hz_pref_rgb_pos.png"
              width="350" height="30"
              className="d-inline-block align-top" alt=""/>
            <span className="font-weight-bold">{""}</span>
          </a>
          <Link
            onClick={this.props.handleSaved}
            className="btn btn-outline-warning pull-right"
            to=""
          >
            Favorite Movies
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
