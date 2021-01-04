import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const MenuInside = styled.div`
  background-color: #fff;
  width: 100%;
  height: 120%;
  position: absolute;
  z-index: 2;
  top: 0%;
`

const Nav = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    a {
      color: #111;
    }
  }
`

export const Menu = () => {
  return (
    <MenuInside>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/links">Link</Link>
        </li>
      </Nav>
    </MenuInside>
  )
}
