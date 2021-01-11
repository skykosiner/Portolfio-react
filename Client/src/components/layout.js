import React, { useState } from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Footer } from "./footer"
import GlobalStyle from "./globalStyles"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import { Menu } from "./menu"
import { ThemeProvider } from "../theme/themeContext"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  // Check if user had been on here before and has been on darkmode check if os is in darkmode

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Menu />}
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
