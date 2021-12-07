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
      <p>
        With over 20 years of experience in live events, Positive Systems
        provides high quality and high impact video walls to seriously enhance
        your events, seminars, keynotes, worship, and/or whatever else you
        doing.
      </p>
      <p>
        We've done weddings and large outdoor festivals, gatherings of worship
        and rodeos. Whatever kind of party your hosting, it won't suprise us,
        and more importantly, we won't suprise you!{" "}
      </p>

      <p>
        Fill out the form below, and we'll get back to you as soon as we can!
      </p>
      <EmailCapture />
    </Layout>
  );
};

export default IndexPage;
