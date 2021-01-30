import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Intro } from "../components/intro"
// Images
import yoni from "../images/Yoni.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="🏠️ Home" description="yoni kosiner portfolio" image={yoni} />
    <Intro />
  </Layout>
)

export default IndexPage
