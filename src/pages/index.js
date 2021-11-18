import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>We provide LED video wall rentals, event management, and home improvement at highly competitive prices!</p>
      <StaticImage
        alt="Our gorgeous video wall."
        src="../images/videowall.png" 
      />
    </Layout>
  )
}

export default IndexPage