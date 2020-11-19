import React from 'react';
import styled from "styled-components";
import me from '../images/me.jpg'
import '../App.css'

// Styles
//  Outside card
const OutsideCard = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
    width: 285px;
    height: 296px;
    border-radius: 4%;
    transition: all 0.3s ease;
    @media (min-width: 1080px) {
        bottom: 50%;
        width: 385px;
        height: 396px;
    }
    /* Hover effects */
    &:hover{
       transform: scale(1.1); 
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Img = styled.img`
    width: 79.5px;
    height: 124px;
    margin-top: 10px;
    border-radius: 15%;
`

const Main = styled.h2`
    font-size: 30px;
    font-family: "Roboto", sans-serif;
`
const Web = styled.p`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
`

const Card = () => {
    return (
        <Div>
            <OutsideCard>
                <Img src={me} alt="" />
                <Main>Hi. I’m Yoni!</Main>
                <Web>Web developer & student</Web>
            </OutsideCard>
        </Div>
    )
}

export default Card;    
