import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import "./stylesheet/App.css"

export default class App extends React.Component {

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
            <div className="background">
                <Header setUserInfo={this.setUserInfo}
                        username={this.state.username}
                        token={this.state.token}
                        isSignedIn={this.state.isSignedIn}/>
                <Body/>
            </div>
        );
    }
}


