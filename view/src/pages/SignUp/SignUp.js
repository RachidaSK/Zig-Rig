import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";

class SignUp extends Component {
    state = {
        email: "",
        username: "",
        password: ""
    };

    componentWillMount () {
        require("./SignUp.css");
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUp = event => {
        event.preventDefault();
        if (this.state.email && this.state.username && this.state.password) {
            console.log("Signed Up");
        } else {
            console.log("error");
        }
    }

    render() {
        return (
            <Container fluid>
                <div className="signPages">
                    <img id="signInUpLogo" src="/images/logo.png" alt="Zig-Rig Logo" className="center" />
                    <Row>
                        <h4>Welcome to Zig-Rig! Zig-Rig is a simple, easy-to-use online  planning tool for <br />
                            calculating electrical power distribution for a multitude of power sources. </h4>
                    </Row>
                    <br />
                    <Row>
                        <Column size="md-8">
                            <form>
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email"
                                />
                                <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="username"
                                    placeholder="Username"
                                />
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password"
                                />
                                <FormBtn
                                    disabled={!(this.state.email && this.state.username && this.state.password)}
                                    onClick={this.handleSignUp}
                                >
                                Sign Up!
                                </FormBtn> 
                            </form>
                        </Column>
                    </Row>
                    <Row>
                        <p className="account">Have an accout?<br />
                        <a href="/">Sign in here.</a>
                        </p>
                    </Row>
                </div>
            </Container>

        )
    }
}

export default SignUp;