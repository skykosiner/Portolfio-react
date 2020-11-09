import React from 'react';
import styled from 'styled-components';
import '../App.css';
// Images
import Insta from '../images/instagram.svg';

const WrapperFooter = styled.footer`
    position: absolute;
    bottom: -60%;
    z-index: 99;
    background-color: #1e1e1e;
    overflow: auto;
    width: 100%;
    height: auto;
    font-family: "Roboto", sans-serif;
`

const FooterText = styled.p`
    color: #fff;
    text-align: center;
`

// Instagram
const InstaText = styled.h2`
    text-align: center;
    color: #fff;
`
// Outside instagram photos
const WrapperInsta = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
// Instagram photos
const InstaPhotos = styled.div`
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
`
const Center = styled.div`
    text-align: center;
`

const Follow = styled.h2`
    color: #fff;
    text-align: center;
    margin: 20px;
`
const Social = styled.div`
    display: grid;
`
const SocialImg = styled.img`

`

const SocialLink = styled.a`
    text-decoration: none;
    :hove{
        cursor: default;
    }
`

const Footer = () => {
    return (
        <WrapperFooter>
            <FooterText>Designed & developed by <br className=""p0qwq0az/> Yoni Kosiner ©2020</FooterText>
            {/* Instagram */}
            <InstaText>Instagram</InstaText>
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
            {/* Twitter */}
            <TwitterText>Twitter feed</TwitterText>
            <Center>
                <a className="twitter-timeline" data-width="220" data-height="200" href="https://twitter.com/KosinerYoni?ref_src=twsrc%5Etfw">Tweets by KosinerYoni</a>
            </Center>
            {/* Follow me */}
            <Follow>Follow me</Follow>
            <Social>
                {/* Icons */}
                <SocialLink href="https://www.instagram.com/kosiner.code">
                    <SocialImg src={Insta}></SocialImg>
                </SocialLink>
            </Social>
        </WrapperFooter>
    )
}

export default Footer;