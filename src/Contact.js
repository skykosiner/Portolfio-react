import React from 'react';
import './styles/Contact.scss';
// Logo
import logo from './images/Logo.svg';
// Menu
import Menu from './Components/Menu/Menu.component.jsx';
// Social icons
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import email from './images/email.svg';
import git from './images/github.svg'
// Contact icon
import connect from './images/phone-book.svg';
// Import footer 
import Footer from './Components/Footer/Footer.component.jsx';
function Contact() {
    return (
        <div className="app">
            {/* For hamburger menu */}
            <Menu />
            <div id="all">
                {/* Logo */}
                <img alt="" className="logo" src={logo} width="139px" height="116px"></img>
                {/* Connect */}
                <img className="connect" src={connect} alt="" />
                {/* Title */}
                <h2 className="touch">Lets get in touch</h2>
                {/* For image */}
                <div className="icons">
                    <a href="https://www.instagram.com/kosiner.codes" target=" _blank">
                        <img alt="" className="icons_ icon" src={instagram}></img>
                    </a>
                    <a href="https://twitter.com/KosinerYoni" target=" _blank">
                        <img alt="" className="icons_ icon" src={twitter}></img>
                    </a>
                    <a href="mailto:yoni@kosiner.co.uk?subject=Yoni%20Kosiner%20Inquiry" target=" _blank">
                        <img alt="" className="icons_ icon" src={email}></img>
                    </a>
                    <a href="https://github.com/yonikosiner" target=" _blank">
                        <img alt="" className="icons_ icon" src={git}></img>
                    </a>
                </div>
                {/* For footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Contact;