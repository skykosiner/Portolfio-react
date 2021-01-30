import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import { AboutHero } from "../components/AboutHero"
import { AboutDesc } from "../components/AboutDesc"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="🧑️ About" description="Yoni Kosiner Portfolio | About" />
      <AboutHero />
      <AboutDesc />
    </Layout>
  )
}

export default About
