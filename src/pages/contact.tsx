import * as React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import '../App.css'

import Hero from '../components/hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
     return(
        <Layout>
             <div id="all">
                 <Hero />
                 <ContactForm />
            </div>
        </Layout>
    );
}

export default Contact;