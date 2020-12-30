import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Intro } from "../components/intro"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div id="all">
        <Intro />
      </div>
    </Layout>
  )
}

export default IndexPage
