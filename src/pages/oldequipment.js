import * as React from "react";
import Layout from "../components/layout";
import { Card } from "react-bootstrap";
import positivesystems from "../images/positive_systems_shitty.png";

const EquipmentPage = () => {
  return (
    <Layout pageTitle="Our Equipment">
      <p>
        We have two types of video panels: our Absen PL3.9 and our Absen AT5.
        The Absen PL3.9 is a higher resolution wall that can go indoor and out,
        while the Absen AT5 is a versatile lightweight indoor wall that
        transforms into a rugged outdoor wall with it's special touring frames.
      </p>
      <p>
        Every video wall build will come with it's own set of challenges to
        overcome, but we more than capable of meeting the demands of your event.
        We have experience in both hanging video walls off of flown truss, as
        well as building ground-supported video walls.
      </p>
      <h2>Absen PL3.9</h2>
      <p>
        A bright, high-resolution video wall that is perfect for both indoor and
        outdoor events.
      </p>
      <h2>Absen AT5</h2>
      <p>
        The AT5 is a versatile lightweight indoor video wall that can transform
        into a rugged outdoor wall by attaching touring frames to the back of
        the panel.
      </p>
      <h2>MJ4</h2>
      <p>A unique video curtain design for creative designs.</p>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={positivesystems} />
          <Card.Title>Absen PL3.9</Card.Title>
          <Card.Text>
            A high resolution LED panel that can go indoors and outdoors.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Absen PL3.9</Card.Title>
          <Card.Text>
            A high resolution LED panel that can go indoors and outdoors.
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default EquipmentPage;
