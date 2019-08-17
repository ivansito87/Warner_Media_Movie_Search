import React from "react";
import {Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Link} from "react-router-dom";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center display-1 font-weight-bolder">404 Page Not Found</h1>
            <h1 className="text-center display-1">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <Row>
              <Link
                className="btn btn-warning text-center"
                to="/"
              >
                Go Back Home
              </Link>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
