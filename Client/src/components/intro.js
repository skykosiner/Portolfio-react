import React from "react"
import yoni from "../images/Yoni.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "./intro.module.css"

export const Intro = () => {
  return (
    <div className={styled.border}>
      <img className={styled.img} src={yoni} alt="" />
      <h1 className={styled.h1}>Hello my name is Yoni Kosiner!</h1>
      <p>Self taught web developer.</p>
    </div>
  )
}
