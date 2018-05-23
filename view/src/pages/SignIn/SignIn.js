import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    };

    componentWillMount () {
        require("../SignUp/SignUp.css");
        require( "./SignIn.css" );
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignIn = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            console.log("Logged In");
        } else {
            console.log("error");
        }
    }

    render() {
        return (
            <Container fluid>
                <div className="signInDiv center">
                    <img id="signInUpLogo" src="/images/logo.png" alt="Zig-Rig Logo" className="center" />
                    <br />
                    <Row>
                        <Column size="lg-8">
                            <form>
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
                                    disabled={!(this.state.username && this.state.password)}
                                    onClick={this.handleSignIn}
                                >
                                Sign In
                                </FormBtn> 
                            </form>
                        </Column>
                    </Row>
                    <Row>
                        <p className="account">Don't have an accout?<br />
                        <a href="/signup">Sign up here.</a>
                        </p>
                    </Row>
                </div>
            </Container>

        )
    }
}

export default SignIn;