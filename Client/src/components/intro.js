import React from "react"
import yoni from "../images/Yoni.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "./intro.module.css"
import { Link } from "gatsby"

export const Intro = () => {
  return (
    <div className={styled.border}>
      <div className={styled.img}>
        <img src={yoni} alt="" />
      </div>
      <h1 className={styled.h1}>Hello my name is Yoni Kosiner!</h1>
      <p className={styled.p}>Self taught web developer.</p>
      <div className={styled.work}>
        <Link to="/contact" style={{ color: "#fff" }}>
          Contact me
        </Link>
      </div>
    </div>
  )
}
