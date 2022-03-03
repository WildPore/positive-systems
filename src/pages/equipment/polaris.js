import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

import { Container, Row, Col, Table, Button } from "react-bootstrap";

import * as productStyle from "./productStyle.module.scss";

import tileSpecSheet from "../../../documents/PolarisTileSpecSheet.pdf";
import panelSpecSheet from "../../../documents/PolarisPanelSpecSheet.pdf";
import promoFlyer from "../../../documents/PolarisPromoFlyer.pdf";

const Polaris = () => {
  return (
    <Layout>
      <Container fluid="lg" className={productStyle.container}>
        <Row className={productStyle.headingContainer}>
          <Col md={{ offset: 2, span: 8 }} lg={{ offset: 3, span: 6 }}>
            <h1 className={productStyle.heading}>Absen Polaris 3.9 Pro</h1>
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
                Half meter by meter design, magnets, and an easy locking system
                allow for quick assembly.
              </li>
              <li>
                Full and half panels can be used together allowing for greater
                flexibility in design.
              </li>
              <li>
                High contrast black LED pixels provide the best possible image.
              </li>
              <li>
                Supports curved designs, 7 degrees convex, 10 degrees concave.
              </li>
              <li>Option to hang to 10m or groundstack to 4m.</li>
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
                  <td colSpan={2}>3.9mm</td>
                </tr>
                <tr>
                  <td>Panel Dimensions (WxHxD, mm)</td>
                  <td>500x500x87</td>
                  <td>500x1000x87</td>
                </tr>
                <tr>
                  <td>Pixels per Panel</td>
                  <td>128x128</td>
                  <td>128x256</td>
                </tr>
                <tr>
                  <td>Panel Weight</td>
                  <td>9.6kg (~21lbs)</td>
                  <td>13.7kg (~30lbs)</td>
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
