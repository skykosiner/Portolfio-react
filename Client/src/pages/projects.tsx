import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import { Projects } from '../components/projects'

// Title of projects page
const Ttile = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
`

const myProjectrs = () => {
    return(
        <Layout>
            <Ttile>My Projects</Ttile>
            <Projects />
        </Layout>
    )
}

export default myProjectrs;