import React from "react";
import TradeItem from "./TradeItem";

export default class TradeItemList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.tradeItems.map((tradeItem) =>
                    <TradeItem item={tradeItem} />)}
            </div>
        );
    }
}

