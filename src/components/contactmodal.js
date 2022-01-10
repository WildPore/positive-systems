import * as React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const ContactModal = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Get in Touch!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Send us a quick message at <span></span>
            <a href="mailto:sales@positivesystems.com">
              sales@positivesystems.com
            </a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
