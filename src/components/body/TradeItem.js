import React from "react";
import "../../styles/App.css"
import "../../styles/tradeitem/tradeitemstyles.css"
export default class TradeItem extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
    }



    getHeader(){
        let itemName = this.props.item.itemName + " " +this.props.item.typeLine;
        if(this.props.item.corrupted) {
            return <h4><span>Corrupted </span>{itemName}</h4>;
        } else {
            return <h4>{itemName}</h4>
        }
    }

    render() {
        return (
            <table>
                <tr>
                    <td className="itemHeaderUnique" colSpan={2}>{this.getHeader()}</td>
                </tr>
                <tr>
                    <td><img src={this.props.item.imageUrl} alt={this.props.item.itemName}/></td>
                    <td>Description of item</td>
                </tr>

                <span>
                    <h5>{this.props.item.price.first} </h5>
                    <img className="currencyImage" src={this.props.currency.imageUrl}/>
                </span>
            </table>
        );
    }
}

