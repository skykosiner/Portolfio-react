import React, { useState } from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Footer } from "./footer"
import GlobalStyle from "./globalStyles"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import { Menu } from "./menu"
import { ThemeProvider } from "../theme/themeContext"
import { ThemeContext } from "../theme/themeContext"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const { theme, setTheme } = useContext(ThemeContext)

  // const isDark = () => {
  //   return theme === "dark"
  // }

  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <Menu />}
        <main style={{ minHeight: "calc(100vh - 158px - 90px)" }}>
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
