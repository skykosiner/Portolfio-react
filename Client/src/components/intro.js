import React from "react"
import yoni from "../images/Yoni.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Border = styled.div`
  margin: 20% auto;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    border-radius: 10%;
    margin-top: 5%;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
`

export const Intro = () => {
  return (
    <Border>
      <img src={yoni} alt="" />
      <h1>Hello my name is Yoni Kosiner!</h1>
      <p>Self taught web developer.</p>
    </Border>
  )
}
