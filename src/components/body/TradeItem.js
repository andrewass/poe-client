import React from "react";

export default class TradeItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h4>{this.props.item.name}</h4>
                <img src={this.props.item.imageUrl} alt={this.props.item.name} />
            </div>
        );
    }
}

