import React from 'react';
// Import sass
import './styles/About.scss';
import './styles/App.scss';
// Import menu
import Menu from './Components/Menu/Menu.component.jsx';
// Logo
import logo from './images/Logo.svg';
// Import footer
import Footer from './Components/Footer/Footer.component.jsx';

function About() {
    function more() {
        var a = document.getElementById("About-text")
        if (a.style.display === "block") {
            a.style.display = "none"
        } else {
            a.style.display = "block"
        }
    }
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
                {/* Button for read more */}
                <button onClick={more} className="more">
                    Read more
                </button>
                <p className="about" id="About-text">
                    I'm a 13 year old student studying computer science in London. I'm also a self taught web developer learning ios development.
                    If you would like to see more checkout my instagram <a href="https://www.instagram.com/kosiner.codes" className="global-link global-underline" target=" _blank" >@kosiner.codes</a>
                </p>
                <Footer />
            </div>
        </div >
    );
}

export default About;
