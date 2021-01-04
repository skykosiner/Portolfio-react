import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export const Footer = () => {
  return (
    <div className="bg-dark text-white fixed-bottom">
      <div className="text-center">
        <h3 className="font-weight-normal">
          &copy;{new Date().getFullYear()} Yoni Kosiner
        </h3>
      </div>
      <div className="d-flex justify-content-center">
        <a
          className="text-white"
          href="https://twitter.com/KosinerYoni"
          target=" _blank"
        >
          Twitter
        </a>
        <a
          className="ml-3 text-white"
          href="https://instagram.com/kosiner.codes"
          target=" _blank"
        >
          Instagram
        </a>
        <a
          className="ml-3 text-white"
          href="https://github.com/yonikosiner"
          target=" _blank"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
