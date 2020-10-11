import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
            alert("wrong password")
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <input style={{
                            textAlign: "center", top: "35%", left: "40%", margin: "5px", width: "20%", position: "absolute", height: "2%"
                        }} value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form - control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input style={{ textAlign: "center", top: "40%", left: "40%", margin: "5px", width: "20%", position: "absolute", height: "2%" }} value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div style={{ fontSize: "25px", textAlign: "center", top: "43%", left: "40%", margin: "5px", width: "20%", position: "absolute", height: "2%", cursor: "pointer" }} type="submit" onClick={this.login} className="btn btn-primary">Login</div>
                </form>

            </div>
        );
    }
}
export default Login;