import * as React from 'react';
import styled from 'styled-components';
import '../App.css'

const FromWrapper = styled.div`
    z-index: 99;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
`

const Form = styled.form`
    font-size: 15px;
`

const Input = styled.input`
    border: none;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
    width: 287px;
    height: 38px;
    margin-top: 20px;
`

const Message = styled.input`
    border: none;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
    width: 287px;
    height: 187px; 
    margin-top: 20px;
`

const SubmitCenter = styled.div`
    display: flex;
    justify-content: center;
    z-index: 99;
`
const Submit = styled.button`
    margin: 10px;
    border: none;
    text-align: center;
    color: #000;
    border: 5px solid #5b6267;
    transition: 0.2s ease all;
    box-shadow: 20px 10px 100px rgba(0, 0, 0, 0.1);
    &:hover{
        color: #fff;
        background-color: #5b6267;
    }
    @media (max-width: 769px){
        background-color: #5b6267;
        color: #fff;
    }
`

const ContactForm = () => {
     return(
        <FromWrapper> 
            <Form action="https://getform.io/f/657ab555-9090-4760-bddd-816aa2c36d7a" method="POST" >
                {/* --------- Name ---------- */}
                <Input type="text" name="name" placeholder="Name: " />
                {/* --------- Email ---------- */}
                 <br /><Input type="email" name="email" placeholder="Email: " />
                 {/* --------- Subject ---------- */}
                 <br /><Input type="text" name="subject" placeholder="Subject: " />
                 {/* --------- Message ---------- */}
                 <br /><Message  type="text" name="message" placeholder="Message: " />
                 {/* --------- Submit button center ---------- */}
                 <SubmitCenter>
                     {/* --------- Submit button ---------- */}
                    <br/><Submit type="submit">Send</Submit> 
                </SubmitCenter>
            </Form>
        </FromWrapper>
    );
}

export default ContactForm;