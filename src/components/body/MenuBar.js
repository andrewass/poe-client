import React from "react";
import {NavLink} from "react-router-dom";
import Authentication from "../authentication/Authentication";

export default class MenuBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <NavLink to="/item-search">Item Search</NavLink>
                <Authentication token={this.props.token}
                                username={this.props.username}
                                isSignedIn={this.props.isSignedIn}
                                setUserInfo={this.props.setUserInfo}/>
            </React.Fragment>
        );
    }
}
