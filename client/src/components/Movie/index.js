import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";
import Tilt from "react-tilt";

function Movie({TitleName, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
        <div className="Question__tag1">{""}</div>
      <Row>
        <Col size="md-6">
        </Col>
      </Row>
      <Row className="mt-3">
        <Col size="12 sm-4 md-3 lg-3">
          <Tilt
            className="Tilt"
            data-tilt-glare="true"
            options={{
              reverse: false,
              max: 35,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: "X",
              reset: true,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
          >
          <a href={link} target="_blank"><img className="img-thumbnail img-thumbnail w-200 h-300 Question mt-3" src={image} alt={TitleName} /></a>
          </Tilt>
        </Col>
        <Col size="12 sm-8 md-9 lg-9">
          <h2 className="font-italic mt-3">{TitleName}</h2>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          <p className="font-italic small">Written by {authors}</p>
          <p className="truncate-text">{description}</p>
              <div className="float-right text-right pull-right">
                <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
                  Webiste
                </a>
                <Button className="pull-right btn-outline-primary"/>
              </div>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Movie;
