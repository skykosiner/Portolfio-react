import React from 'react';
//  Sass
import './styles/links.scss'
// Image of me
import me from './images/me.jpg'

function Links() {
    function insta() {
        alert("hello world")
    }
    function twitter() {
        alert("hello world")
    }
    function portfolio() {
        alert("hello world")
    }
    return (
        <div className="app">
            <h1 className="title">Links</h1>
            {/* Center image */}
            <div className="center">
                {/* Acutal image */}
                <img className="center_ img-me" src={me} alt="" />
            </div>
            <div className="links">
                <button onClick={insta} className="instagram">📷  Instagram</button>
                <button onClick={twitter} className="twitter"> 🐦 Twitter</button>
                <button onClick={portfolio} className="portfolio">🧑‍💻 Portfolio</button>
            </div>
        </div >
    );
}

export default Links;
