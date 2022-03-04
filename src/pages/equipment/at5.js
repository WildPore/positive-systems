import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

import { Container, Row, Col, Table, Button } from "react-bootstrap";

import * as productStyle from "./productStyle.module.scss";

import tileSpecSheet from "../../../documents/AT5TileSpecSheet.pdf";
import panelSpecSheet from "../../../documents/AT5PanelSpecSheet.pdf";
import promoFlyer from "../../../documents/AT5PromoFlyer.pdf";

const Polaris = () => {
  return (
    <Layout>
      <Container fluid="lg">
        <Row className={productStyle.headingContainer}>
          <Col md={{ span: 12 }} lg={{ offset: 3, span: 6 }}>
            <h1 className={productStyle.heading}>Absen AT5</h1>
          </Col>
        </Row>
        <Row>
          <Col md lg={{ offset: 1, span: 5 }}>
            <StaticImage
              className="rounded"
              src="https://picsum.photos/500/800"
            />
          </Col>
          <Col sm lg={{ span: 5 }}>
            <h2 className={productStyle.sectionHeading}>Product Description</h2>
            <ul>
              <li>
                Magnets and an easy locking system allow for quick assembly.
              </li>
              <li>
                Lightweight carbon fiber frame allows for bigger walls under
                tight weight constraints.
              </li>
              <li>
                High constrat black LED pixels provide the best possible image.
              </li>
              <li>90 degree corners with a gap.</li>
              <li>Option to hang to 12m or groundstack to 4.2m.</li>
            </ul>
            <h2 className={productStyle.sectionHeading}>Product Details</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Half by Half</th>
                  <th>Half by Full</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LED Type</td>
                  <td colSpan={2}>Common Cathode Black SMD 3in1 1921</td>
                </tr>
                <tr>
                  <td>Pixel Pitch</td>
                  <td colSpan={2}>5.55mm</td>
                </tr>
                <tr>
                  <td>Panel Dimensions (WxHxD, mm)</td>
                  <td>600x600x84</td>
                  <td>600x1200x84</td>
                </tr>
                <tr>
                  <td>Pixels per Panel</td>
                  <td>108x108</td>
                  <td>108x216</td>
                </tr>
                <tr>
                  <td>Panel Weight</td>
                  <td>7.5kg (~16.5lbs)</td>
                  <td>13.5kg (~30lbs)</td>
                </tr>
                <tr>
                  <td>Panel Support Options</td>
                  <td colSpan={2}>Rigging and Stacking</td>
                </tr>
                <tr>
                  <td>IP Rating (Front/Rear)</td>
                  <td colSpan={2}>IP65/IP54</td>
                </tr>
              </tbody>
            </Table>
            <h2 className={productStyle.sectionHeading}>Product Attachments</h2>
            <a href={tileSpecSheet} download>
              <Button className={productStyle.downloadButton}>
                Tile Spec Sheet
              </Button>
            </a>
            <a href={panelSpecSheet} download>
              <Button className={productStyle.downloadButton}>
                Panel Spec Sheet
              </Button>
            </a>
            <a href={promoFlyer} download>
              <Button className={productStyle.downloadButton}>
                Promo Flyer
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Polaris;
