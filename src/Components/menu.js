import React, { Component } from 'react';

class menu extends Component {
    click() {
        alert("Im an alert");
    }
    render() {
        return (
            <div className="app">
                <button onClick={this.click}><div className="menu-wrapper">
                    <div className="hamburger-menu"></div>
                </div>
                </button>
                <div className="inside">
                    <a>Home</a>
                    <a>About me</a>
                    <a>Home automation </a>
                </div>
            </div>
        )
    }
}