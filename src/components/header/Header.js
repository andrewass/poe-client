import React from "react";
import Logo from "../../images/poe-logo.png";
import "../../stylesheet/App.css"
import Authentication from "../authentication/Authentication";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <img className="headerImage" src={Logo} alt="poe logo"/>
                <br/>
                <Authentication setUserInfo={this.props.setUserInfo}
                                isSignedIn={this.props.isSignedIn}
                                username={this.props.username}
                                token={this.props.token}/>
            </div>
        );
    }
}

