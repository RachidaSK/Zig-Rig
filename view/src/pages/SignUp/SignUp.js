import React, { Component } from "react";
// import '../../components/Auth';
import { Column, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Forms";
import "./SignUp.css";

class SignUp extends Component {
    state = {
        email: "",
        username: "",
        password: ""
    };

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
                <img id="logo" src="/images/logo.png" alt="Zig-Rig Logo" className="center" />
                <Row>
                    <h3>Welcome to Zig-Rig! Zig-Rig is a simple, easy-to-use online  planning tool for <br />
                        calculating electrical power distribution for a multitude of power sources. </h3>
                </Row>
                <br />
                <Row>
                    <Column size="md-6">
                        <form>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                            />
                            <br />
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
            </Container>

        )
    }
}

export default SignUp;