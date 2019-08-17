import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({TitleName, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2 className="font-italic">{TitleName}</h2>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-200 h-300" src={image} alt={TitleName} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
      <Row className="pull-right mt-4">
        <Col size="md-4 float-right text-right">
          <div className="float-right text-right pull-right">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button className="pull-right"/>
          </div>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
