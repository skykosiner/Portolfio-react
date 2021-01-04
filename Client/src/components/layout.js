import React, { useState } from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Footer } from "./footer"
import GlobalStyle from "./globalStyles"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import { Menu } from "./menu"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Menu />}
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
