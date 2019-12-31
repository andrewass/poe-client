import React from "react";
import axios from "axios";


const URL = {
    sign_in: "http://localhost:8080/sign-in"
}

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.postSignInToServer = this.postSignInToServer.bind(this);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    postSignInToServer(event) {
        event.preventDefault();
        axios.post(URL.sign_in, {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                this.props.setUserInfo(response.data.user.username, response.data.token, true)
            }, (error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.postSignInToServer}>
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