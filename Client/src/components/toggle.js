import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../theme/themeContext"

const Out = styled.div`
  .slider:before {
    position: absolute;
    content: "🌙";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = () => {
    return theme === "dark"
  }
  return (
    <Out style={{ color: "#000", position: "absolute", zIndex: "99" }}>
      <label className="switch">
        <input
          onChange={e => setTheme(e.target.checked ? "dark" : "light")}
          checked={isDark()}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </Out>
  )
}

export default Toggle
