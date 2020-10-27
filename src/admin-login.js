import React, { Component } from 'react';
import Login from './Login';
import fire from './config/Fire';
import Admin from './Adminpage';

class adminlogin extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }
    render() {
        return (
            <div className="App" >
                {this.state.user ? (
                    <Admin />
                ) :
                    (
                        <Login />
                    )}
            </div>
        );
    }
}
export default adminlogin;
