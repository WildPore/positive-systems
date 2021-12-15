import * as React from "react";
import Layout from "../components/layout";
import EmailCapture from "../components/emailcapture";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
      <p>
        Positive Systems is the premier video wall rental company in the Pacific
        Northwest.
      </p>
      <EmailCapture />
    </Layout>
  );
};

export default IndexPage;
