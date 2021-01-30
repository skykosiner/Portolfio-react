import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import style from "../styles/project.module.css"
import { Link } from "gatsby"

export const Projects = () => {
  return (
    <div className="position-absolute" style={{ width: "100%" }}>
      {/* Title for projects page */}
      <h1
        className="text-center"
        style={{ fontSize: "55px", color: "var(--color-text-secondary)" }}
      >
        Projects
      </h1>
      {/* All projects */}
      <div
        className="d-flex flex-row justify-content-center align-items-cetner"
        style={{ width: "100%" }}
      >
        {/* Portoflio project */}
        <Link id={style.card} className={style.link} to="/">
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{
              width: "15rem",
              background: "var(--color-card-primary)",
              border: "1px solid var(--color-border)",
              marginRight: "50px",
            }}
          >
            <h2 style={{ color: "var(--color-text-secondary)" }}>Portfolio</h2>
            <p className="text-justify" style={{ padding: "10px 10px" }}>
              My portfolio website is where you can find my blog see my projects
              and learn more about me
            </p>
          </div>
        </Link>
        <div className={style.break}></div>
        {/* Movie app project */}
        <a className={style.link} href="#">
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{
              width: "15rem",
              background: "var(--color-card-primary)",
              border: "1px solid var(--color-border)",
              marginRight: "50px",
            }}
          >
            <h2 style={{ color: "var(--color-text-secondary)" }}>Movie app</h2>
            <p className="text-justify" style={{ padding: "10px 10px" }}>
              On this website i used the imbd api in order to get the top 50
              films of all time and be able to search though any film
            </p>
          </div>
        </a>
        <div className={style.break}></div>
        {/* Life cover in trust project */}
        <div
          className="d-flex justify-content-center flex-column align-items-center"
          style={{
            width: "15rem",
            background: "var(--color-card-primary)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h2 style={{ color: "var(--color-text-secondary)" }}>
            Life Cover In Trust
          </h2>
        </div>
      </div>
    </div>
  )
}
