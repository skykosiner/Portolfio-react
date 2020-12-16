import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  margin-top: 20px;
`

export const Projects = () => {
  // Check screen size using react hooks
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      }
      window.addEventListener("resize", handleResize)

      handleResize()

      return () => window.removeEventListener("resize")
    }, [])

    return windowSize
  }
  return (
    <div>
      <Title>Projects</Title>
    </div>
  )
}
