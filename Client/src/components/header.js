import { Link } from "gatsby"
import React from "react"
import logo from "../images/Logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./header.module.css"
import useWindowSize from "../hooks/useWindowSize"
import HamburgerMenu from "react-hamburger-menu"

export const Header = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const size = useWindowSize()
  return (
    <div>
      {/* Check to see if size is bigger then 1025px */}
      {size.width > 1025 && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className={style.head}>
              <img className="navbar-brand" src={logo} alt="Logo" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" style={{ cursor: "pointer" }} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/links"
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                >
                  Links
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {size.width < 1025 && (
        <nav className="d-flex flex-column justify-content-between">
          <img style={{ width: "100px" }} src={logo} alt="" />
          <div
            className="position-absolute"
            style={{ right: "3%", padding: "1rem", zIndex: "3" }}
          >
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={25}
              height={20}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
              className="burger"
            />
          </div>
        </nav>
      )}
    </div>
  )
}
