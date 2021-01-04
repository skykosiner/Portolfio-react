import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Intro } from "../components/intro"
import yoni from "../images/Yoni.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home page"
        description="yoni kosiner portfolio"
        image={yoni}
      />
      <div id="all">
        <Intro />
      </div>
    </Layout>
  )
}

export default IndexPage
