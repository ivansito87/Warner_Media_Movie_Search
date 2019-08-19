import React from "react";
import "./Footer.css";

class FooterBlk extends React.Component {
  render() {
    return (
      <header className="footer">
        <hr/>
        <h3 className="pull-right text-center m-2">
          <span className="text-war ivan">Connect With Me</span>
        </h3>
        <ul className="social-networks chicken spin-icon">
          <li>
            <a href="https://www.linkedin.com/in/ivan-rendon-368b53174/" className="icon-linkedin">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ivan-rendon-368b53174/" className="icon-twitter">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ivan.rendon.319" className="icon-facebook">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/ivansito87" className="icon-twitch">
              Twitch
            </a>
          </li>
          <li>
            <a href="https://github.com/ivansito87" className="icon-github">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/ivansito87/" className="icon-pinterest">
              Pinterest
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/11216672/ivansito87?tab=profile" className="icon-instagram">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://gt.bootcampcontent.com/ivan.rendon" className="icon-vimeo">
              Vimeo
            </a>
          </li>
        </ul>
        <h4 className="pull-right text-center m-1">
          Made with ❤️ by <span className="text-info">
          <a href="https://www.ivanrendon.dev"
             target="_blank">
            Ivan Rendon
          </a>
        </span> and Proudly
          built using
          <span className="text-primary">
          <i className="fab fa-react"/>
          React.js
          </span>
        </h4>
      </header>);
  }
}

export default FooterBlk;
