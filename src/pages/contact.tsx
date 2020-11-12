import * as React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import styled from 'styled-components';
import '../App.css'

import Hero from '../components/hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
     return(
        <Layout>
            <SEO title="Contact" />
             <div id="all">
                 <Hero />
                 <ContactForm />
            </div>
        </Layout>
    );
}

export default Contact;