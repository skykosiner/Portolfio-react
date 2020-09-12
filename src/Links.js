import React from 'react';
//  Sass
import './styles/links.scss'
// Image of me
import me from './images/me.jpg'

function Links() {
    return (
        <div className="app">
            <div className="center">
                <img src={me} alt="" className="center_ me-img" />
            </div>
        </div >
    );
}

export default Links;
