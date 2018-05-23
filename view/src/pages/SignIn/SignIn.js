import React, { Component } from "react";
// import '../../components/Auth';
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    };

    componentWillMount () {
        const css = require( "./SignIn.css" );
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
                <img id="logo" src="/images/logo.png" alt="Zig-Rig Logo" className="center" />
                <Row>
                    <Column size="md-6">
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username"
                            />
                            <br />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password"
                            />
                            <br />
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
            </Container>

        )
    }
}

export default SignIn;