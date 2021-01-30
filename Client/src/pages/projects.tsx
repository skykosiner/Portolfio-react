import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Projects } from "../components/projects"
import { ListRepository } from "../components/listRepository"
import SEO from "../components/seo"

const myProjectrs = () => {
  return (
    <Layout>
      <SEO title="📄 Projects" />
      <Projects />
      {/* <ListRepository /> */}
    </Layout>
  )
}

export default myProjectrs
