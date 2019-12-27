import React from "react";
import Header from "./components/header/Header";

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

    setUserInfo(username, token) {
        this.setState({
                isSignedIn: true,
                username: username,
                token: token
            }
        );
    }

    render() {
        return (
            <div>
                <Header setUserInfo={this.setUserInfo}
                        username={this.state.username}
                        token={this.state.token}
                        isSignedIn={this.state.isSignedIn}/>
                <h1>Username is {this.state.username}</h1>
                <h1>Email is {this.state.email}</h1>
                <h1>Token is {this.state.token}</h1>
            </div>
        );
    }
}

