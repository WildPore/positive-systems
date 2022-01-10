import * as React from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import FormTextField from "./formexample";
import { useSpring, animated } from "react-spring";

const AnimatedRow = animated(Form.Row);

const animation = {
  transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
};

export default () => {
  const props = useSpring(animation);
  return (
    <AnimatedRow style={props}>
      <FormTextField
        as={Col}
        sm="4"
        controlId="validationFormik01"
        label="First name"
        type="text"
        name="firstName"
      />
    </AnimatedRow>
  );
};
