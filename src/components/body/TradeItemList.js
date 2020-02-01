import React from "react";
import TradeItem from "./TradeItem";

export default class TradeItemList extends React.Component {

    constructor(props) {
        super(props);
        this.findCurrencyForTradeItem = this.findCurrencyForTradeItem.bind(this);
    }

    findCurrencyForTradeItem(usedCurrency) {
        return this.props.currencies.find(currency => currency.shortName === usedCurrency);
    }

    render() {
        return (
            <div>
                {this.props.tradeItems
                    .map((tradeItem) => <TradeItem item={tradeItem}
                                                   currency={this.findCurrencyForTradeItem(tradeItem.currency)}/>)}
            </div>
        );
    }
}

