import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card.tsx'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <div id="all">
        <Card />
      </div>
    </Layout>
  )
}

export default IndexPage;