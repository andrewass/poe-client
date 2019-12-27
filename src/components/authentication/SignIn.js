import React from "react";

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.submitHandler}>
                    <label> Username :
                        <input name="username" type="text" onChange={this.changeHandler}/>
                    </label><br/>
                    <label> Password :
                        <input name="password" type="password" onChange={this.changeHandler}/>
                    </label><br/>
                    <input name="submit" type="submit"/>
                </form>
            </div>
        );
    }
}