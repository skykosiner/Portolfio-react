import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "./globalStyles"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
