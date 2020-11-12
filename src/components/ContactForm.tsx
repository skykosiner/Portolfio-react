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
             <form
                 name="contact"
                 method="post"
                 data-netlify="true"
                 data-netlify-honeypot= "bot-field"
             >
                 <input name="name" placeholder="Name: " type="" /> 
                 <button>Send</button>
            </form>
        </CenterForm>
    );
}

export default ContactForm;