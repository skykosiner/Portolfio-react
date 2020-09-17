import React from 'react';
import './menu.scss'

const menu = () => {
    function toggle() {
        var m = document.getElementById("animate")
        var x = document.getElementById("inside");
        var a = document.getElementById("all")
        if (a.style.display === "block") {
            x.style.display = "block";
            m.classList.add("animate");
            a.style.display = "none"
        } else {
            x.style.display = "none";
            m.classList.remove("animate");
            a.style.display = "block";
        }
    }
    return (
        <div className="app">
            {/* Mobile */}
            <div className="mobile">
            </div>
            <div onClick={toggle} className="menu-wrapper">
                <div id="animate" className="hamburger-menu"></div>
            </div>
            <div id="inside" className="inside">
                <a className="global-underline global-link" href="/"><p>Home<br /></p></a>
                <br /><a className="global-underline global-link" href="/about"><p >About me <br /></p></a>
                <br /><a className="global-underline global-link" href="/Contact">Contact <br /></a>
            </div>
        </div>
    );
}

export default menu;  
