import React, { useState } from 'react';
import gsap from "gsap";
import './menu.scss'
import styled from 'styled-components';

function Menu() {
    window.onload = console.log("hello there")
    const [isShowing, toggle] = useState(false);

    function menu() {
        var x = document.getElementById("all")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        toggle(!isShowing)
    }

    return (
        <div className="app">
            <div onClick={menu}>
                <span></span>
                <br /><span></span>
                <br /><span></span>
            </div>
            <div className="slide" id={isShowing ? "menu-show" : ""}>
                <a href="/">
                    <p>Home</p>
                </a>
                <a href="/about">
                    <br /> <p>About</p>
                </a>
                <a href="/contact">
                    <br /> <p>Contact</p>
                </a>
                <a href="/Shortcuts">
                    <br /> <p>Shortcuts</p>
                </a>
            </div>
            <div className="slider"></div>
        </div>
    );
}

export default Menu;  