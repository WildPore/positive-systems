import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as landingCardStyle from "./LandingCard.module.scss";

const LandingCard = (props) => {
  return (
    <Card className={landingCardStyle.card}>
      <Card.Header className={landingCardStyle.titleText}>
        {props.cardTitle}
      </Card.Header>
      <Card.Img src="https://picsum.photos/500/500" />
      <Card.Body>
        <Card.Text className={landingCardStyle.bodyText}>
          {props.cardText}
        </Card.Text>
        <Button className={landingCardStyle.btn}>Learn more</Button>
      </Card.Body>
    </Card>
  );
};

export default LandingCard;
