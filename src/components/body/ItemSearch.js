import React from "react";
import axios from "axios";
import Select from "react-select";
import TradeItemList from "./TradeItemList";


const URL = {
    trade_items: "http://localhost:8080/poe/trade-items",
    leagues: "http://localhost:8080/poe/leagues"
};

export default class ItemSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            league: "",
            tradeItems: [],
            leagues: []
        };
        this.searchForTradeItems = this.searchForTradeItems.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.fillLeagueList = this.fillLeagueList.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidMount() {
        axios.get(URL.leagues)
            .then((response) => {
                this.fillLeagueList(response.data)
            }, (error) => {
                console.log(error);
            });
    }

    fillLeagueList(leagues) {
        let leagueList = [];
        for (let i in leagues) {
            leagueList.push({
                value: leagues[i].name,
                label: leagues[i].name
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

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleOptionChange(selectedOption) {
        this.setState({league: selectedOption.value})
    }

    render() {
        return (
            <div>
                <TradeItemList tradeItems={this.state.tradeItems}/>
                <form onSubmit={this.searchForTradeItems}>
                    <label> League :
                        <Select className="dropdown" options={this.state.leagues} onChange={this.handleOptionChange}/>
                    </label>
                    <label> Item Name :
                        <input name="itemName" type="text" onChange={this.changeHandler}/>
                    </label><br/>
                    <input name="submit" type="submit"/>
                </form>
            </div>
        );
    }
}

