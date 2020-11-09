import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'
import Footer from '../components/footer'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <div id="all">
        <Card />
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage;