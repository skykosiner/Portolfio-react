import React from 'react';
import styled from 'styled-components';
import '../App.css'

const WrapperFooter = styled.footer`
    position: absolute;
    bottom: -7%;
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

const Footer = () => {
    return (
        <WrapperFooter>
            <FooterText>Designed & developed by <br /> Yoni Kosiner ©2020</FooterText>
            {/* Instagram */}
            <InstaText>Instagram</InstaText>
        </WrapperFooter>
    )
}

export default Footer;