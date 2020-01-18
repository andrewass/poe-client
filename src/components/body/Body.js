import React from "react";
import ItemSearch from "./ItemSearch";
import {Route, Switch} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MenuBar from "./MenuBar";

export default class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            token: "",
            isSignedIn: false
        };
        this.setUserInfo = this.setUserInfo.bind(this);
    }

    setUserInfo(username, token, isSigningIn) {
        this.setState({
                isSignedIn: isSigningIn,
                username: username,
                token: token
            }
        );
    }

    render() {
        return (
            <div className="body">
                <MenuBar isSignedIn={this.state.isSignedIn}
                         token={this.state.token}
                         username={this.state.username}
                         setUserInfo={this.setUserInfo}/>
                <Switch>
                    <Route path="/sign-in" render={() =>
                        <SignIn setUserInfo={this.setUserInfo}/>}/>
                    <Route path="/sign-up" render={() =>
                        <SignUp setUserInfo={this.setUserInfo}/>}/>
                    <Route path="/item-search">
                        <ItemSearch/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

