import * as React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import "normalize.css";
import * as Styles from "./emailcapture.module.scss";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const EmailCapture = () => {
  return (
    <div className={Styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <MyTextInput
              label="Your Name"
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <MyTextInput
              label="Your Email Address"
              name="email"
              type="text"
              placeholder="person@example.com"
            />
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailCapture;
