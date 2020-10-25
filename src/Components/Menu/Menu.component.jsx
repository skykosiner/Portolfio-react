import React, { useState } from 'react';
import './menu.scss'

function Menu() {
    const [isShowing, toggle] = useState(false);

    function menu() {
        toggle(!isShowing)
    }

    return (
        <div className="app">
            <div onClick={menu}>
                <span></span>
                <br /><span></span>
                <br /><span></span>
            </div>
            <div className="slide" className={isShowing ? "menu-show" : ""}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/Shortcuts">Shortcuts</a>
            </div>
        </div>
    );
}

export default Menu;  