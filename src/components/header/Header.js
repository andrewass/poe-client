import React from "react";
import Authentication from "../authentication/Authentication";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Authentication setUserInfo={this.props.setUserInfo}/>
        );
    }
}

