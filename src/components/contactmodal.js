import * as React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactModal = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "salesNotice", ...values }),
      })
        .then(() => {
          alert("Success");
          actions.resetForm();
        })
        .catch(() => {
          alert("Error");
        })
        .finally(() => actions.setSubmitting(false));
    },
  });

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
          <Form
            name="salesNotice"
            method="post"
            onSubmit={formik.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <p>
              Leave us a message and your email address and we'll get back to
              you ASAP!
            </p>

            <input type="hidden" name="form-name" value="salesNotice" />
            <p hidden>
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" onChange={formik.handleChange} />
              </label>
            </p>

            <Form.Control
              as="textarea"
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Leave us a message"
            />

            <InputGroup className="mb-3">
              <Form.Control
                id="name"
                name="name"
                type="name"
                placeholder="Your name"
                aria-label="Name"
                aria-describedby="nameSubmit"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="emailSubmit"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <Button
                id="emailSubmit"
                as="input"
                type="submit"
                value="Submit"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
