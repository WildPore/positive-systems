import * as React from "react";
import Card from "react-bootstrap/Card";
import PositiveSystemsImage from "../images/positive_systems_shitty.png";

const LandingPageFeature = ({ title, image, bodyText }) => {
  return (
    <Card style={{ width: "26rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={PositiveSystemsImage} />
        <Card.Text>{bodyText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LandingPageFeature;
