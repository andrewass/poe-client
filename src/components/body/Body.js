import React from "react";
import ItemSearch from "./ItemSearch";
import AutoComplete from "./AutoComplete";

export default class Body extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ItemSearch/>
            </div>
        );
    }
}

