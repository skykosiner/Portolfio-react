import React, { useContext } from "react"
import { ThemeContext } from "../theme/themeContext"

export const Menu = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const isDark = () => {
    return theme === "dark"
  }
  return (
    <div>
      <h1>Menu</h1>
    </div>
  )
}
