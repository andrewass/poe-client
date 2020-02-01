import React from "react";
import axios from "axios";
import Select from "react-select";
import TradeItemList from "./TradeItemList";
import AutoComplete from "./AutoComplete";
import {TextStyle} from "../../styles/styles";

const URL = {
    trade_items: "http://localhost:8080/poe/trade-items",
    leagues: "http://localhost:8080/poe/leagues",
    items: "http://localhost:8080/poe/items",
    currencies: "http://localhost:8080/poe/static-items"
};


export default class ItemSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            league: "",
            tradeItems: [],
            leagues: [],
            items: [],
            currencies: []
        };
        this.searchForTradeItems = this.searchForTradeItems.bind(this);
        this.setItemName = this.setItemName.bind(this);
        this.fillLeagueList = this.fillLeagueList.bind(this);
        this.fillItemList = this.fillItemList.bind(this);
        this.fetchCurrency = this.fetchCurrency.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidMount() {
        this.fetchLeagues();
        this.fetchItems();
        this.fetchCurrency();
    }

    fetchLeagues() {
        axios.get(URL.leagues)
            .then((response) => {
                this.fillLeagueList(response.data)
            }, (error) => {
                console.log(error);
            });
    }

    fetchItems() {
        axios.get(URL.items)
            .then((response) => {
                this.fillItemList(response.data)
            }, (error) => {
                console.log(error);
            });
    }

    fetchCurrency() {
        axios.get(URL.currencies)
            .then((response) => {
                this.setState({currencies: response.data})
            }, (error) => {
                console.log(error);
            });
    }

    fillItemList(items) {
        let itemList = [];
        for (let i in items) {
            itemList.push(items[i].itemName);
        }
        this.setState({items: itemList});
    }

    fillLeagueList(leagues) {
        let leagueList = [];
        for (let i in leagues) {
            leagueList.push({
                value: leagues[i].name,
                label: leagues[i].name,
                color: "black"
            });
        }
        this.setState({leagues: leagueList});
    }

    searchForTradeItems(event) {
        event.preventDefault();
        axios.post(URL.trade_items, {
            name: this.state.itemName,
            league: this.state.league
        })
            .then((response) => {
                this.setState({tradeItems: response.data})
            }, (error) => {
                console.log(error);
            });
    }

    setItemName(selectedItemName) {
        this.setState({itemName: selectedItemName});
    }

    handleOptionChange(selectedOption) {
        this.setState({league: selectedOption.value})
    }

    render() {
        return (
            <div className="searchForm">
                <form onSubmit={this.searchForTradeItems}>
                    <label style={TextStyle}> League : </label>
                    <Select className="dropdown" options={this.state.leagues} onChange={this.handleOptionChange}/>
                    <label style={TextStyle}> Item Name :</label><br/>
                    <AutoComplete items={this.state.items} setItemName={this.setItemName}/>
                    <input name="submit" type="submit"/>
                </form>
                <TradeItemList tradeItems={this.state.tradeItems} currencies={this.state.currencies}/>
            </div>
        );
    }
}

