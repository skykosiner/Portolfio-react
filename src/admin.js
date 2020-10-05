import { from } from 'apollo-boost';
import React from 'react';

function admin() {
    function submit() {
        var x = document.getElementById("username")
        var g = document.getElementById("password")
        if (x === "yoni-_kosiner") {
            if (g === "yoni") {
                window.location.href = "/admin-page"
                console.log("authorised")
            }
console.log("hello world")
        }
    }
    return (
        <div className="App">
            <label for="fname">Username </label>
            <input type="text" id="username" name="fname" />
            <br /><label for="lname">Password </label>
            <input type="password" id="password" name="lname" />
            <br /><input onClick={submit} type="submit" value="Submit" />
        </div>
    );
}

export default admin;
