import React from 'react';
// Import sass
import '/Users/yonikosiner/my-app/src/styles/About.scss';
import './styles/App.scss';
// Import menu
import Menu from '/Users/yonikosiner/my-app/src/Components/Menu/Menu.component.jsx';
// Import footer
import Footer from './Components/Footer/Footer.component.jsx';

function About() {
    return (
        <div className="app">
            <Menu />
            <div id="all">
                <h1>About</h1>
                <Footer />
            </div>
        </div >
    );
}

export default About;
