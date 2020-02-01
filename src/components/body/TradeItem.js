import React from "react";
import "../../styles/App.css"
export default class TradeItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.item.name}</h4>
                <img src={this.props.item.imageUrl} alt={this.props.item.name}/>
                <span>
                    <h5>{this.props.item.currencyAmount} </h5>
                    <img className="currencyImage" src={this.props.currency.imageUrl}/>
                </span>
            </div>
        );
    }
}

