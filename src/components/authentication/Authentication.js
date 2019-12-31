import React from "react";
import axios from "axios";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {NavTab} from "react-router-tabs";
import {BrowserRouter as Router, Route} from "react-router-dom";

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
            return (<button onClick={this.signOutUser}>Sign Out</button>);
        } else {
            return (
                <Router>
                    <NavTab to="/sign-in">Sign In</NavTab>
                    <NavTab to="/sign-up">Sign Up</NavTab>
                    <Route exact path="/sign-in" render={() =>
                        <SignIn setUserInfo={this.props.setUserInfo}/>}/>
                    <Route exact path="/sign-up" render={() =>
                        <SignUp setUserInfo={this.props.setUserInfo}/>}/>
                </Router>
            );
        }
    }
}

