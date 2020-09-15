import React from 'react';
// Import sass
import '/Users/yonikosiner/my-app/src/styles/About.scss';
import './styles/App.scss';
// Import menu
import Menu from '/Users/yonikosiner/my-app/src/Components/Menu/Menu.component.jsx';
// Logo
import logo from './images/Logo.svg';
// Import footer
import Footer from './Components/Footer/Footer.component.jsx';

function About() {
    return (
        <div className="app">
            <Menu />
            <div id="all">
                {/* Logo */}
                <img className="logo" src={logo} alt="" width="139px" height="116px"></img>
                {/* Title */}
                <h1 className="title">About</h1>
                {/* About text title */}
                <p className="hello-world">Hello world 👋 my name is Yoni Kosiner or known
                    <br /> online as <a className="global-link global-underline" href="https://www.instagram.com/kosiner.codes " target="_blank">@kosinercodes</a></p>
                {/* About text */}
                <p className="hello-text">I’m currently a student studying computer science. (self taught web dev/iOS/python before
                <br /> learning computer science at school)</p>
                <Footer />
            </div>
        </div >
    );
}

export default About;
