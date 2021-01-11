import React, { useContext } from "react"
import { ThemeContext } from "../theme/themeContext"

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const isDark = () => {
    return theme === "dark"
  }

  return (
    <div style={{ color: "#000", position: "absolute", zIndex: "99" }}>
      <div>
        <input
          id="toogle"
          type="checkbox"
          onChange={e => setTheme(e.target.checked ? "dark" : "light")}
          checked={isDark()}
        />
        <p>{isDark() ? "🌒️" : "☀️"}</p>
      </div>
    </div>
  )
}

export default Toggle
