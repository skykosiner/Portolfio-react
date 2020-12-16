import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import '../App.css';
// Images
import Insta from '../images/instagram.svg';
import Twit from '../images/twitter.svg';
import Git from '../images/github.svg';

const WrapperFooter = styled.footer`
    display: none;
    height: 100%;
    position: absolute;
    bottom: -92%;
    z-index: 99;
    background-color: #1e1e1e;
    overflow: auto;
    width: 100%;
    font-family: "Roboto", sans-serif;
    @media (min-width: 1080px) {
    }
`

const FooterText = styled.p`
    color: #fff;
    text-align: center;
    @media (min-width: 1080px){
        position: absolute;
        left: 0;
        border: 1px solid red;
    }
`

// Instagram
const InstaText = styled.h2`
    text-align: center;
    color: #fff;
    @media(min-width: 1080px){ 
        position: absolute;
        bottom: 90%;
    }
`
// Outside instagram photos
const CenterInsta = styled.div`
    display: flex;
    justify-content: center;
    @media(min-width: 1080px){
        display: none;
    }
`
const WrapperInsta = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 50%;
`
// Instagram photos
const InstaPhotos = styled.div`
    height: auto;
    height: 50px;
    width: 50px;
    background-color: #E0E0E0;
    margin: auto;
    margin-top: 20px;
`
// Twitter
const TwitterText = styled.h2`
    color: #fff;
    text-align: center;
    margin: 20px;
    @media (min-width: 1080px){
        display: none;
    }
`
const Center = styled.div`
    text-align: center;
      @media (min-width: 1080px){
        display: none;
    }
`

// Follow me
const Follow = styled.h2`
    color: #fff;
    text-align: center;
    margin: 20px;
      @media (min-width: 1080px){
        display: none;
    }
`

// All social media 
const Social = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`
// Images for social media
const SocialImg = styled.img`
    padding: 5px;
`

// Links from social media
const SocialLink = styled.a`
    text-decoration: none;
    width: 44px;
    height: 44px;
      @media (min-width: 1080px){
        display: none;
    }
`
// About me section
const About = styled.h2`
    color: #fff;
    text-align: center;
    margin: 20px;
      @media (min-width: 1080px){
        display: none;
    }
`
// About me text
const AboutText = styled.p`
    color: #fff;
    text-align: justify;
      @media (min-width: 1080px){
        display: none;
    }
`
// To center about me text
const CenterAbout = styled.div`
    display: flex;
    justify-content: center;
`
// Pages
const Page = styled.h2`
    text-align: center;
    color: #fff;
      @media (min-width: 1080px){
        display: none;
    }
`

const PageLink = styled.li`
    margin-bottom: -5%;
    list-style: none;
    text-decoration: none;
    color: #fff;
      @media (min-width: 1080px){
        display: none;
    }
`
// Center links

const CenterLinks = styled.div`
    text-align: center;
    height: 10%;
`
const Br = styled.br`
    @media (min-width: 1080px){
        display: none;
    }
`



const Footer = () => {
    return (
        <WrapperFooter>
            <FooterText>Designed & developed by <Br /> Yoni Kosiner ©2020</FooterText>
            Instagram
            <InstaText>Instagram</InstaText>
            <CenterInsta>
                <WrapperInsta>
                    {/* Top row */}
                    <InstaPhotos></InstaPhotos>
                    <InstaPhotos></InstaPhotos>
                    <InstaPhotos></InstaPhotos>
                    {/* Bottom row */}
                    <InstaPhotos></InstaPhotos>
                    <InstaPhotos></InstaPhotos>
                    <InstaPhotos></InstaPhotos>
                </WrapperInsta>
            </CenterInsta>
            {/* Twitter */}
            <TwitterText>Twitter feed</TwitterText>
            <Center>
                <a className="twitter-timeline" data-width="220" data-height="200" href="https://twitter.com/KosinerYoni?ref_src=twsrc%5Etfw">Tweets by KosinerYoni</a>
            </Center>
            {/* Follow me */}
            <Follow>Follow me</Follow>
            
            <Social>
                {/* Icons and links */}
                <SocialLink href="https://www.instagram.com/kosiner.code">
                    {/* <SocialImg src={}></SocialImg> */}
                </SocialLink>
                <SocialLink href="https://twitter.com/KosinerYoni">
                    {/* <SocialImg style={{ */}
                        {/* width: "44px", */}
                        {/* height: "44px" */}
                    {/* }} src={}></SocialImg> */}
                </SocialLink>
                <SocialLink href="https://github.com/yonikosiner">
                    {/* <SocialImg src={}></SocialImg> */}
                </SocialLink>
            </Social>
            {/* About me */}
            <About>About me</About>
            <CenterAbout>
                <AboutText>Hello my name is <br /> Yoni Kosiner I’m a <br /> web developer <br /> and student </AboutText>
            </CenterAbout>
            <Page>Pages</Page>
            <CenterLinks>
                <Link to="/">
                    <PageLink>Home</PageLink>
                </Link>
                <br /><Link to="/about">
                    <PageLink>About</PageLink>
                </Link>
                <br /><Link to="/contact">
                    <PageLink>Contact</PageLink>
                </Link>
                <br /><Link to="/projects">
                    <PageLink>My projects</PageLink>
                </Link>
                <br /><Link to="/links">
                    <PageLink>Links</PageLink>
                </Link>
            </CenterLinks>
        </WrapperFooter>
    );
}

export default Footer;
