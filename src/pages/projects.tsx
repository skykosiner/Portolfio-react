import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import lifeCover from "../images/lifeCover.png";
import portfolio from "../images/portfolio.png";

const ProjectsWrapper = styled.div`
  font-family: "Roboto", sans-serif;
`

const Title = styled.h2`
    font-size: 55px;
    text-align: center;
`

// For all projects
const Projects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

// For each signaller project
const Project = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
`

// The project title
const ProjectTitle = styled.h1`
    text-align: center;
`
// Live text
const SeeLive = styled.button`
    border: 5px solid #333333;
    background: none;
    transition: 0.4s ease all;
    font-size: 23px;
    width: 20%;
    &:hover{
        background: #333333;
        color: #fff;
    }
`
// Button to see code
const SeeCode = styled.button`
   border: 5px solid #333333;
    background: none;
    transition: 0.4s ease all;
    margin-top: 10px;
    font-size: 23px;
    width: 20%;
    &:hover{
        background: #333333;
        color: #fff;
    }    
`
// Image to show project
const Image = styled.img`
    width: 616px;
    height: 311px;
    object-fit: cover;
`
const More = styled.p`
    font-size: 25px;
    text-align: center;
    margin-top: 40px;
`

const myProjects = () => {
    // See life cover in trust live
    const lifeLive = () => {
        window.open(
            'https://lifecoverintrust.com',
            '_blank'
        )
    }
    // See portfolio live
    const portfolioLive = () => {
        window.location.href = '/'
    }
    // See Life cover in trust code
    const lifeCode = () => {
        window.open(
            'https://github.com/yonikosiner/Life-in-cover-trust',
            '_blank'
        )
    }
    // See code for portfolio
    const portfolioCode = () => {
        window.open(
            'https://github.com/yonikosiner/Portolfio-react',
            '_blank' 
        );
    }
    return (
        <Layout>
            <ProjectsWrapper>
            <Title>My Projects</Title>
            <Projects>
                <Project>
                    <ProjectTitle>
                        Life Cover In Trust
                    </ProjectTitle>
                    <Image src={lifeCover} alt="life cover in trust home" />
                    <SeeLive onClick={lifeLive}>See live</SeeLive>
                    <SeeCode onClick={lifeCode}>See code</SeeCode>
                </Project>
                <Project>
                    <ProjectTitle>
                        Portfolio
                    </ProjectTitle>
                    <Image src={portfolio} alt="portfolio home screen" />
                    <SeeLive onClick={portfolioLive}>See live</SeeLive>
                    <SeeCode onClick={portfolioCode}>See code</SeeCode>
                </Project>
            </Projects>
            {/* More to come */}
            <More>More to come ; )</More>
           </ProjectsWrapper>
        </Layout>
    );
}

export default myProjects;