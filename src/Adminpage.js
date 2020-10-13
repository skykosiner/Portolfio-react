import React, { Component } from 'react';
import fire from './config/Fire';
import './styles/admin.scss'

class admin extends Component {
    // Log user out
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    // New blog post
    new() {

    }

    render() {
        return (
            <div>
                <h1>Welcome back Yoni</h1>
                <div className="line"></div>
                <div onClick={this.new} style={{ cursor: "pointer" }} className="new-post">Upload a new blog post
                <br />+</div>
                <div style={{ cursor: "pointer" }} onClick={this.logout}>Logout</div>
            </div>
        );

    }

}

export default admin;