import React from "react";
import axios from "axios";

const URL = {
    sign_up: "http://localhost:8080/sign-up"
};

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.postSignUpToServer = this.postSignUpToServer.bind(this);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    postSignUpToServer(event) {
        event.preventDefault();
        axios.post(URL.sign_up, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
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
                <h3>Sign Up</h3>
                <form onSubmit={this.postSignUpToServer}>
                    <label> Username :
                        <input name="username" type="text" onChange={this.changeHandler}/>
                    </label><br/>
                    <label> Password :
                        <input name="password" type="password" onChange={this.changeHandler}/>
                    </label><br/>
                    <label> E-mail :
                        <input name="email" type="text" onChange={this.changeHandler}/>
                    </label><br/>
                    <input name="submit" type="submit"/>
                </form>
            </div>
        );
    }
}

