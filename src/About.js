import React from 'react';
// Import sass
import '/Users/yonikosiner/my-app/src/styles/About.scss';
import './styles/App.scss';
// Import menu
import Menu from '/Users/yonikosiner/my-app/src/Components/Menu/Menu.component.jsx';

function About() {
    return (
        <div className="app">
            <Menu />
            <div id="all">
                <h1>About</h1>
            </div>
        </div >
    );
}

export default About;
