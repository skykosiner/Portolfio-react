import React from 'react';
import './menu.scss'

const menu = () => {
    function toggle() {
        var m = document.getElementById("animate")
        var a = document.getElementById("toggle")
        var x = document.getElementById("inside");
        if (x.style.display === "none") {
            x.style.display = "block";
            a.style.display = "none";
            m.classList.add("animate");
        } else {
            x.style.display = "none";
            a.style.display = "block";
            m.classList.remove("animate");
        }
    }

    return (
        <div className="app">
            <div onClick={toggle} className="menu-wrapper">
                <div id="animate" className="hamburger-menu"></div>
            </div>
            <div id="inside" className="inside">
                <p className="global-underline">Home</p>
                <br></br>  <p className="global-underline">About</p>
                <p className="global-underline">Home automation page</p>
            </div>
        </div>
    );
};

export default menu;