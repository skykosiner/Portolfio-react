import React from "react"
import yoni from "../images/Yoni.jpg"

export const AboutHero = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center mt-4">
      <h1 style={{ fontSize: "55px", color: "var(--color-text-secondary)" }}>
        About Me
      </h1>
      {/* Image of me */}
      <img
        className="rounded-circle"
        style={{ width: "13rem" }}
        src={yoni}
        alt="portrait of me"
      />
    </div>
  )
}
