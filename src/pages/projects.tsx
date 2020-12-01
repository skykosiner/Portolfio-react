import React from 'react';
import Layout from '../components/layout'
import {motion} from 'framer-motion'
import styled from 'styled-components';
import lifeCoverImg from "../images/lifeCover.png";
import portfolioImg from "../images/portfolio.png";

const Title = styled.p`
    font-weight: bold;
    text-align: center;
    font-size: 69px;
`

const Projects = styled.div``


const Project = styled.div``

const ProjectTitle = styled.p`
    font-size: 42px;
    font-weight: bold;
    margin-top: 10%;
    margin-left: 10%;
`
const ProjectImg = styled.img`
    position: absolute;
    right: 3%;
    top: 20%;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Desc = styled.p`
    margin-top: -2%;
    font-size: 26px;
    margin-left: 9.9%;
`

const Img = styled.img`
    width: 616px;
    height: 312px;
    object-fit: cover;
    position: absolute;
    right: 3%;
    top: 45%;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`

const SeeCode = styled.button`
    position: absolute;
    margin-left: 8.6%;
    border: 5px solid #333;
    background: none;
    padding: 5px;
    transition: background 0.2s ease;
    /* Remove blue outline on click */
    outline: none;
    &:hover {
        background: #333;
        color: #fff;
        text-decoration: underline;
    }
`

const SeeLive = styled.button`
    position: absolute;
    margin-left: 17%;
    border: 5px solid #333;
    background: none;
    padding: 5px;
    transition: background 0.2s ease;
    /* Remove blue outline on click */
    outline: none;
    &:hover {
        background: #333;
        color: #fff;
        text-decoration: underline;
    } 
`


const myProjects = () => {
    // Open the code for life cover in trust
    const lifeCover = () => {
        window.open(
            // Url
            'https://github.com/yonikosiner/Life-in-cover-trust',
            // Open in new tab
            '_blank' 
        );
    }
    const portfolio = () => {
        window.open(
            // Url
            'https://github.com/yonikosiner/Portolfio-react',
            // Open in new tab
            '_blank'
        )
    }
    // See life cover int rust live
    const lifeCoverLive = () => {
        window.open(
            // Url
            'https://lifecoverintrust.com',
            // Open in new tab
            '_blank' 
        );
    }
    // See portfolio live
    const portfolioLive = () => {
        window.open(
            // Url
            '/',
            // Open in new tab
            '_blank' 
        );
    }
    return (
        <Layout>
            <Title>Projects</Title>
            <Projects>
                {/* Life cover in trust */}
                <Project>
                    <ProjectTitle>Life Cover In Trust</ProjectTitle>
                    <ProjectImg src={lifeCoverImg} alt="Life cover in trust home"/>
                    <Desc>
                        This is my first client project as a 
                        <br />freelance web developer. This was built 
                        <br />using Gatsby, express and styled
                        <br />components.
                    </Desc>
                    {/* See code */}
                    <SeeCode onClick={lifeCover}>See Code</SeeCode>
                    {/* See live */}
                    <SeeLive onClick={lifeCoverLive}>See Live</SeeLive>
                </Project>
                {/* Portfolio */}
                <Project>
                    <ProjectTitle>Portfolio</ProjectTitle>
                    <Img src={portfolioImg} alt="Portfolio home" />
                    <Desc>
                        My portfolio website is where you 
                        <br />can find my projects, Work with me, and
                        <br />learn more about me. My portfolio is
                        <br />built with Gatsby for frontend 
                        <br />and express for the backend.
                    </Desc>
                    {/* See code */}
                    <SeeCode onClick={portfolio}>See Code</SeeCode>
                    {/* See live */}
                    <SeeLive onClick={portfolioLive}>See Live</SeeLive>
                </Project>
            </Projects>
        </Layout>
    );
}

export default myProjects;