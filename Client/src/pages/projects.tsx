import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Projects } from "../components/projects"
import { ListRepository } from "../components/listRepository"

const myProjectrs = () => {
  return (
    <Layout>
      <Projects />
      <ListRepository />
    </Layout>
  )
}

export default myProjectrs
