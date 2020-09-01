import React from 'react';

function menu() {
    return (
        <div className="app">
            <div className="menu-wrapper">
                <div className="hamburger-menu"></div>
            </div>
            <div className="inside">
                <a>Home</a>
                <a>About me</a>
                <a>Home automation </a>
            </div>
        </div>
    );
}

export default menu;