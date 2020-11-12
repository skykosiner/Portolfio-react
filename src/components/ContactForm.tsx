import * as React from 'react';
import styled from 'styled-components';
import '../App.css'

const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
`

const Form = styled.form`
`

const Input = styled.input`
    border: none;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
`
const Submit = styled.button`
    border: none
    box-shadow: 20px 10px 100px rgba(0, 0, 0, 0.1);dd
`

const ContactForm = () => {
     return(
        <ContactForm>
            <Form action="https://getform.io/f/657ab555-9090-4760-bddd-816aa2c36d7a" method="POST" >
                <Input type="text" name="name" placeholder="Name: " />
                <Input type="email" name="email" placeholder="Email: "/>
                <Input type="text" name="subject" placeholder="Subject: "/>
                <Input type="text" name="message" placeholder="Message: "/>
                <Submit type="submit">Send</Submit>
            </Form>
        </ContactForm>
    );
}

export default ContactForm;