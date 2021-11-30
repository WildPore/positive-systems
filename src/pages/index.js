import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>There's nothing here yet.</p>
      <ul>
        <li>Design, probably in Figma and then figure out how to implement in Gatsby</li>
        <li>Copy, which is partially blocked by design (need to finish wireframe</li>
        <li>Connect hosting to domain</li>
        <li>Is NameSilo a decent registar, or should that get migrated to something like Google Domains</li>
      </ul>
      <StaticImage
        alt="Our gorgeous video wall."
        src="../images/videowall.png" 
      />
    </Layout>
  )
}

export default IndexPage