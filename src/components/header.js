import { Link } from "gatsby"
import styled from 'styled-components';
import React, { useState } from "react"
import logo from '../images/logo.svg'
import '../App.css';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.header`
  background: #E3E3E3;
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
`

const NavLinks = styled.ul`
  float: right;
  list-style: none;
  margin-top: 40px;
  @media (max-width: 768px){
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
`
// Hamburger menu
const MenuWrapper = styled.div`
  position: absolute;
  z-index: 99;
  right: 5%;
  top: 4%;
  cursor: pointer;
  /* Scaling */
  @media (min-width: 769px){
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
const Inside = styled.div`
  background: #000;
  background-size: cover;
  z-index: 99;
  display: none;
  position: absolute;
  width: 100%;
  top: 15%;
  height: 85%;
  overflow: hidden;
`

const Links = styled.li`
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 5px;
`

const Header = () => {
  const [isShowing, toggle] = useState(false);
  
  function menu() {
    var x = document.getElementById("all")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    toggle(!isShowing)
  }
  return (
    <div>
      {/* Hamburger menu */}
    <MenuWrapper onClick={menu}>
        <Menu></Menu>
       <br/> <Menu></Menu>
       <br/> <Menu></Menu>
      </MenuWrapper>
      <Inside id={isShowing ? "menu-show" : ""}>
        <Link to="/">
          <Links>Home</Links>
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
    <Wrapper>
      <Logo src={logo} alt="" />
      {/* Hamburger menu */}
      <NavLinks>
        <Link to="/">
          <LinksNav>Home</LinksNav>
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
  );
}

export default Header
