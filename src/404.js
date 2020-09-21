import React from 'react';
// Sass
import './styles/404.scss'

function error() {
    function home() {
        window.location.href = "/"
    }
    return (
        <div className="app">
            <h1 className="found">404 page not found</h1>
            <button className="home" onClick={home}>Go home</button>
        </div>
    );
}

export default error;
