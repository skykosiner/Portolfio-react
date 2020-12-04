import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
// Images
import me from "../images/me.jpg"

// TItle
const TItle = styled.h1`
  font-weight: bold;
  font-size: 59px;
  text-align: center;
  margin-top: 3%;
`
// Image
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 242px;
    width: 154.5px;
    border-radius: 20px;
  }
`
// Links button
// ALl button
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  .break {
    @media (max-width: 769px) {
      flex-basis: 100%;
      height: 0;
    }
  }
`
const LinkButton = styled.button`
  border: 5px solid #333;
  background: none;
  padding: 5px;
  font-size: 25px;
  margin-right: 14px;
  width: 12%;
  transition: background 0.2s ease;
  outline: none;
  &:hover {
    background: #333;
    color: #fff;
  }
  @media (max-width: 769px) {
    width: 50%;
    background: #333;
    color: #fff;
    margin-top: 10px;
  }
`

const Link = () => {
  // Link to instagram page
  const instaLink = () => {
    window.open("https://www.instagram.com/kosiner.codes", "_blank")
  }
  // Link to twitter profile
  const twitterLink = () => {
    window.open("https://twitter.com/KosinerYoni", "_blank")
  }
  // Link to portfolio home page
  const portfolioLink = () => {
    window.open("/", "_blank")
  }
  // Link to github profile
  const githubLink = () => {
    window.open("https://github.com/yonikosiner", "_blank")
  }
  // Link to amazon page
  const amazonLink = () => {
    window.open(
      "https://www.amazon.co.uk/ideas/amzn1.account.AE776VQXIKLTI2XBAB7CH3SQQ5UA/34G6U3M0OB380?ref=idea_share",
      "_blank"
    )
  }
  return (
    <Layout>
      {/* TItle */}
      <TItle>Links</TItle>
      {/* Image */}
      <Image>
        <img src={me} alt="" />
      </Image>
      {/* Links button */}
      <Links>
        <LinkButton onClick={instaLink}>Instagram</LinkButton>{" "}
        <div className="break"></div>
        <LinkButton onClick={twitterLink}>Twitter</LinkButton>{" "}
        <div className="break"></div>
        <LinkButton onClick={portfolioLink}>Portfolio</LinkButton>{" "}
        <div className="break"></div>
        <LinkButton onClick={githubLink}>Github</LinkButton>{" "}
        <div className="break"></div>
        <LinkButton onClick={amazonLink}>Gear</LinkButton>{" "}
        <div className="break"></div>
      </Links>
    </Layout>
  )
}

export default Link
