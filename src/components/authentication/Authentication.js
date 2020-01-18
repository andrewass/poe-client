import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const URL = {
    sign_out: "http://localhost:8080/sign-out"
}

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.signOutUser = this.signOutUser.bind(this)
    }

    signOutUser() {
        axios.post(URL.sign_out, {
            token: this.props.token,
            username: this.props.username
        }).then(() => {
            this.props.setUserInfo("", "", false);
        }, (error) => {
            console.log(error)
        });
    }


    render() {
        if (this.props.isSignedIn) {
            return (
                <React.Fragment>
                    <NavLink to="/item-search">
                        <span onClick={this.signOutUser}>Sign Out</span>
                    </NavLink>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <NavLink to="/sign-in">Sign In</NavLink>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </React.Fragment>
            );
        }
    }
}

