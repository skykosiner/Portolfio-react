import * as React from 'react';
import styled from 'styled-components';
import '../App.css'

const CenterForm = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
`


const ContactForm = () => {
     return(
        <CenterForm>
            <form action="https://getform.io/f/657ab555-9090-4760-bddd-816aa2c36d7a" method="POST" >
                <input type="text" name="name" placeholder="Name: " />
                <input type="email" name="email" placeholder="Email: "/>
                <input type="text" name="subject" placeholder="Subject: "/>
                <input type="text" name="message" placeholder="Message: "/>
                <button type="submit">Send</button>
            </form>
        </CenterForm>
    );
}

export default ContactForm;