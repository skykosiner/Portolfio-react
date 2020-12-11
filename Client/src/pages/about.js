import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import { AboutHero } from "../components/AboutHero"
import { AboutDesc } from "../components/AboutDesc"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero />
      <AboutDesc />
    </Layout>
  )
}

export default About
