import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {BrowserRouter as Router} from "react-router-dom";
import "./stylesheet/App.css"

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="background">
                    <Header />
                    <Body />
                </div>
            </Router>
        );
    }
}


