import React from "react";


export default class AutoComplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredItems: [],
            showSuggestions: false,
            userInput: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.fillList = this.fillList.bind(this);
        this.shouldShowSuggestions = this.shouldShowSuggestions.bind(this);
    }

    onClick(event) {
        this.setState({
            userInput: event.target.innerText,
            showSuggestions: false,
            filteredItems: []
        });
        this.props.setItemName(event.target.innerText);
    }

    onChange(e) {
        const filteredItems = this.props.items.filter(
            item =>
                item.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestions: 0,
            filteredItems,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    }

    shouldShowSuggestions() {
        return this.state.filteredItems.length &&
            this.state.showSuggestions &&
            this.state.userInput.length > 0;
    }

    fillList() {
        if (this.shouldShowSuggestions) {
            return (
                <ul>
                    {this.state.filteredItems.slice(0, Math.min(this.state.filteredItems.length, 8))
                        .map((item, index) => {
                        return (
                            <li onClick={this.onClick}>{item}</li>
                        );
                    })}
                </ul>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" onChange={this.onChange}
                       value={this.state.userInput}/>
                {this.fillList()}
            </React.Fragment>
        );
    }
}

