import { Link } from "gatsby"
import styled from "styled-components"
import React, { useState } from "react"
import { motion } from "framer-motion"
import logo from '../images/Logo.svg'
import "../App.css"
import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Wrapper = styled.header`
  background: #e3e3e3;
  width: 100%;
  height: 124px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  overflow: hidden;
`
const Logo = styled.img`
  margin-left: -25px;
  width: 174px;
  height: 124px;
  transition: 0.3s all ease;
  &:hover {
    transform: scale(1.1);
  }
`

const NavLinks = styled.ul`
  float: right;
  list-style: none;
  margin-top: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`

const LinksNav = styled.li`
  position: relative;
  color: #000;
  float: left;
  margin-left: 20px;
  right: 20%;
  font-family: "Roboto", sans-serif;
  transition: 0.3s ease all;
  &:hover {
    text-decoration: underline;
  }
`
// Hamburger menu
const MenuWrapper = styled.div`
  position: absolute;
  z-index: 99;
  right: 5%;
  top: 4%;
  cursor: pointer;
  /* Scaling */
  @media (min-width: 769px) {
    display: none;
  }
`
const Menu = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 45px;
  height: 4px;
  margin-bottom: 0;
  border: 2px solid #000;
  background-color: #000;
  color: #000;
`
const Inside = styled(motion.div)`
  background: #b2b2b2;
  background-size: cover;
  z-index: 99;
  display: none;
  position: absolute;
  width: 353px;
  top: 17%;
  right: 0;
  height: 100%;
  overflow: hidden;
  transition: 1s ease all;
  -webkit-animation: linear alternate;
  -webkit-animation-name: run;
  -webkit-animation-duration: 0.2s;
  @keyframes run {
    from {
      left: 90%;
    }
    to {
      left: 200px;
    }
  }
`

const Links = styled.li`
  text-decoration: none;
  list-style: none;
  color: #000;
  text-align: center;
  border-radius: 10px;
  padding: 20.7px;
  font-family: "Roboto", sans-serif;
  margin: 5px;
  font-size: 40px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Header = () => {
  const [isShowing, toggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const menu = () => {
    toggle(!isShowing)
  }
  return (
    <div>
      {/* Hamburger menu */}
      <MenuWrapper onClick={menu}>
        <Menu></Menu>
        <br /> <Menu></Menu>
        <br /> <Menu></Menu>
      </MenuWrapper>
      {/* Inside hamburger menu */}
      <Center>
        <Inside
          transition={{ ease: "easeOut", duration: 0.4 }}
          id={isShowing ? "menu-show" : ""}
        >
          <Link to="/">
            <Links>Home</Links>
          </Link>
          <Link to="/blog">
            <Links>Blog</Links>
          </Link>
          <Link to="/about">
            <Links>About</Links>
          </Link>
          <Link to="/contact">
            <Links>Contact</Links>
          </Link>
          <Link to="/projects">
            <Links>My projects</Links>
          </Link>
        </Inside>
      </Center>
      <Wrapper>
        <Logo src={logo} alt="" />
        <NavLinks>
          <Link to="/">
            <LinksNav>Home</LinksNav>
          </Link>
          <Link to="/blog">
            <LinksNav>Blog</LinksNav>
          </Link>
          <Link to="/about">
            <LinksNav>About</LinksNav>
          </Link>
          <Link to="/contact">
            <LinksNav>Contact</LinksNav>
          </Link>
          <Link to="/projects">
            <LinksNav>My projects</LinksNav>
          </Link>
        </NavLinks>
      </Wrapper>
    </div>
  )
}

export default Header
