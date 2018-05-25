import React, { Component } from 'react';
// import Container from '../../components/Grid/Container';
// import Row from '../../components/Grid/Row';
// import Col from '../../components/Grid/Column';
import { Row, Column, Container } from "../../components/Grid";
import './landingPage.css';
import '../../components/Auth/Auth';
import { login } from '../../components/Auth/Auth';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <div className="landingPageDiv">
                        <Row>
                            <Column size="6">
                                <img src='/images/authLogo.png' className="landingPageLogo" />
                            </Column>
                        </Row>
                        <br />
                        <Row>
                            <Column size="12">
                                <h2 className="landingPageHeader">Welcome to Zig-Rig!</h2>
                                <br />
                                <p> Zig-Rig is a simple, easy-to-use online  planning tool for <br />
                                    calculating electrical power distribution for a multitude of power sources.</p>
                            </Column>
                        </Row>
                        <br />
                        <Row>
                            <Column size="4" id="login-btn" >
                                <button className="btn btn-lg authRedirect center" onClick={login}>Click Here to Sign In!</button>
                            </Column>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

// this does work but the problem is when you try to set and get the tokens after login
export default LandingPage;
