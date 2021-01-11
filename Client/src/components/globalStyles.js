import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
    }
    `

export default GlobalStyle

// background: ${isDaRk => (isDark ? "#000" : "#fff")};
// display: ${isDark => (isDark ? "hidden" : "display")};
// color: ${isDark => (isDark ? "#fff" : "#000")}
