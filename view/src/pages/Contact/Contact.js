import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import { ContactInput } from "../../components/ContactInput";
import ContactSubmit from "../../components/ContactSubmit";
import Footer from "../../components/Footer";

class Contact extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    componentWillMount () {
        require( "./Contact.css" );
    }

    handleInputChange = event => {
        const {firstName, lastName, email, message, value} = event.target;
        this.setState({
            [firstName]: value,
            [lastName]: value,
            [email]: value,
            [message]: value
        });
    }

    render() {
        return (
            <div className="contactWrapper">
                <NavBar />
                <Container fluid>
                    <div className="contactContainer animated fadeInLeftBig">
                        <Row>
                            <h2 id="contactLabel">Contact ZigRig Below</h2>
                        </Row>
                        <Row>
                            <Column size="lg-6">
                                <ContactInput
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name"
                                />
                            </Column>
                            <Column size="lg-6">
                                <ContactInput
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12">
                                <ContactInput
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="janedoe@gmail.com"
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12">
                                <textarea
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    name="message"
                                    placeholder="Enter Message Here"
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12">
                                <ContactSubmit />
                            </Column>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Contact;