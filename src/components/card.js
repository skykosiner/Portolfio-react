import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import me from "../images/me.jpg"
import "../App.css"

// Styles
//  Outside card
const OutsideCard = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  width: 285px;
  height: 296px;
  border-radius: 4%;
  transition: all 0.3s ease;
  @media (min-width: 1080px) {
    bottom: 50%;
    width: 385px;
    height: 396px;
  }
  /* Hover effects */
  &:hover {
    transform: scale(1.1);
  }
  .Link {
    transition: 0.3s ease all;
    &:hover {
      border-bottom: 5px #3e3e3e solid;
    }
  }
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Img = styled.img`
  width: 79.5px;
  height: 124px;
  margin-top: 10px;
  border-radius: 15%;
`

const Main = styled.h2`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
`
const Web = styled.p`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`

const Work = styled(Link)`
  position: absolute;
  background: none;
  border: 4px solid #333333;
  padding: 5px;
  transition: 0.2s ease all;
  color: #000;
  bottom: 40%;
  &:hover {
    color: #fff;
    background-color: #333333;
  }
  @media (max-width: 769px) {
    background-color: #333333;
    color: #fff;
    bottom: 27%;
  }
`

const Card = () => {
  return (
    <Div>
      <OutsideCard>
        <Img src={me} alt="" />
        <Main>Hi. I’m Yoni!</Main>
        <Link
          className="Link"
          style={{ color: "#000", textDecoration: "none" }}
          to="/blog"
        >
          <Web>Web developer & student & blogger</Web>
        </Link>
      </OutsideCard>
      <Work to="/contact">Would you like to work with me?</Work>
    </Div>
  )
}

export default Card
