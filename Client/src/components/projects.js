import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import lifeImg from "../images/lifeCover.png"

const Project = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
`

const Title = styled.h1`
  margin-left: 5%;
  width: 34%;
`

const Description = styled.p`
  flex: 1;
  padding-right: 5rem;
  min-height: -10vh;
  z-index: 2;
`

const Img = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden; ;
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

  const size = useWindowSize()
  return (
    <div>
      <Project>
        <Title>Life cover in trust</Title>
        <br />{" "}
        <Description>
          This website was my first freelnace client project
        </Description>
        <Img>
          <img src={lifeImg} alt="Image for life cover in turst" />
        </Img>
      </Project>
    </div>
  )
}
