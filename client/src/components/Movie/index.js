import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Movie({TitleName, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      {/*<div className="Question">{""}</div>*/}
        {/*<div className="card mt-4">*/}
        <div className="Question__tag1">{""}</div>
     {/* <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2 className="font-italic">{TitleName}</h2>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
      </Row>*/}
      <Row>
        <Col size="md-6">
          {/*<p className="font-italic small">Written by {authors}</p>*/}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col size="12 sm-4 md-3 lg-3">
          <img className="img-thumbnail img-thumbnail w-200 h-300 Question mt-3" src={image} alt={TitleName} />
        </Col>
        <Col size="12 sm-8 md-9 lg-9">
          <h2 className="font-italic mt-3">{TitleName}</h2>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          <p className="font-italic small">Written by {authors}</p>
          <p className="truncate-text">{description}</p>
          {/*<Row className="pull-right mt-4">
            <Col size="md-4 float-right text-right">*/}
              <div className="float-right text-right pull-right">
                <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
                  Webiste
                </a>
                <Button className="pull-right btn-outline-primary"/>
              </div>
          {/*  </Col>
          </Row>*/}
        </Col>
      </Row>
    </ListItem>
  );
}

export default Movie;
