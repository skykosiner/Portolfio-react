import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import lifeCover from "../images/lifeCover.png";
import portfolio from "../images/portfolio.png";

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
`
const Desc = styled.p`
    margin-top: -2%;
    font-size: 26px;
    margin-left: 9.9%;
`


const myProjects = () => {
    return (
        <Layout>
            <Title>Projects</Title>
            <Projects>
                {/* Life cover in trust */}
                <Project>
                    <ProjectTitle>Life Cover In Trust</ProjectTitle>
                    <ProjectImg src={lifeCover} alt="Life cover in trust home"/>
                    <Desc>
                        This is my first client project as a 
                        <br />freelance web developer. This was built 
                        <br />using Gatsby, express and styled
                        <br />components.</Desc>
                </Project>
                {/* Portfolio */}
                <project>
                    <ProjectTitle>Portfolio</ProjectTitle>
                    <ProjectImg src={portfolio} alt="Portfolio home" />
                </project>
            </Projects>
        </Layout>
    );
}

export default myProjects;