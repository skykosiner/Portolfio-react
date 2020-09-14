import React from 'react';
//  Sass
import './styles/links.scss'
// Image of me
import me from './images/me.jpg'

function Links() {
    function insta() {
        window.location.href = "https://www.instagram.com/kosiner.codes";
    }
    function twitter() {
        window.location.href = "https://twitter.com/KosinerYoni";
    }
    function portfolio() {
        window.location.href = "/";
    }
    function git() {
        window.location.href = "https://github.com/yonikosiner";
    }
    function set() {
        window.location.href = "https://amzn.eu/ccAupQh"
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
                <button onClick={insta} className="instagram"> 📷  Instagram</button>
                <button onClick={twitter} className="twitter"> 🐦 Twitter</button>
                <button onClick={portfolio} className="portfolio">🧑‍💻 Portfolio</button>
                <button onClick={git} className="git">🖥  GitHub</button>
                <button onClick={set} className="setup">🖱 Setup Gear</button>
            </div>
        </div >
    );
}

export default Links;
