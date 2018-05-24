import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

class About extends Component {

    componentWillMount () {
        require( "./About.css" );
    }

    render() {
        return (
            <div className="aboutWrapper">
                <NavBar />
                <Container fluid>
                    <div className="aboutContainer">
                    <Row>
                        <Column size="lg-6">
                            <div className="michaelDiv animated bounceInLeft">
                                <Row>
                                    <Column size="lg-5">
                                    </Column>
                                    <Column size="lg-7">
                                        <h2>Michael Gerov</h2>
                                        <h4>Express/Routing + Project Management</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Row>
                                            <div className="michaelIcons">
                                                <Column size="lg-2">
                                                    <a href="https://github.com/mhgerov" target="_blank">
                                                        <div className="githubIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.linkedin.com/in/michael-gerov-207a0727/" target="_blank">
                                                        <div className="linkedInIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <div className="instagramIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <div className="twitterIcon"></div>
                                                    </a>
                                                </Column>
                                            </div>
                                        </Row>
                                    </Column>
                                </Row>
                            </div>
                            <div className="chrisDiv animated bounceInLeft">
                                <Row>
                                    <Column size="lg-5">
                                    </Column>
                                    <Column size="lg-7">
                                        <h2>Chris Houck</h2>
                                        <h4>UI/Functionality + Product Requirements</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Row>
                                            <div className="chrisIcons">
                                                <Column size="lg-2">
                                                    <a href="https://github.com/houckchris" target="_blank">
                                                        <div className="githubIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.linkedin.com/in/chris-houck-9560415a/" target="_blank">
                                                        <div className="linkedInIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <div className="instagramIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <div className="twitterIcon"></div>
                                                    </a>
                                                </Column>
                                            </div>
                                        </Row>
                                    </Column>
                                </Row>
                            </div>
                            <div className="willDiv animated bounceInLeft">
                                <Row>
                                    <Column size="lg-5">
                                    </Column>
                                    <Column size="lg-7">
                                        <h2>Will Miller</h2>
                                        <h4>User Authentication + PDF</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Row>
                                            <div className="willIcons">
                                                <Column size="lg-2">
                                                    <a href="https://github.com/will-miller93" target="_blank">
                                                        <div className="githubIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.linkedin.com/in/orit-freud-9437ba131/" target="_blank">
                                                        <div className="linkedInIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <div className="instagramIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <div className="twitterIcon"></div>
                                                    </a>
                                                </Column>
                                            </div>
                                        </Row>
                                    </Column>
                                </Row>
                            </div>
                        </Column>
                        <Column size="lg-6">
                        <div className="carolineDiv animated bounceInRight">
                                <Row>
                                    <Column size="lg-5">
                                    </Column>
                                    <Column size="lg-7">
                                        <h2>Caroline Rink</h2>
                                        <h4>UI/Visual Design</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Row>
                                            <div className="carolineIcons">
                                                <Column size="lg-2">
                                                    <a href="https://github.com/carolinesrink" target="_blank">
                                                        <div className="githubIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.linkedin.com/in/" target="_blank">
                                                        <div className="linkedInIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <div className="instagramIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <div className="twitterIcon"></div>
                                                    </a>
                                                </Column>
                                            </div>
                                        </Row>
                                    </Column>
                                </Row>
                            </div>
                        <div className="oritDiv animated bounceInRight">
                                <Row>
                                    <Column size="lg-5">
                                    </Column>
                                    <Column size="lg-7">
                                        <h2>Orit Freud</h2>
                                        <h4>Database Engineering + Mathematical Modeling</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Row>
                                            <div className="oritIcons">
                                                <Column size="lg-2">
                                                    <a href="https://github.com/orit1989" target="_blank">
                                                        <div className="githubIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.linkedin.com/in/orit-freud-9437ba131/" target="_blank">
                                                        <div className="linkedInIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <div className="instagramIcon"></div>
                                                    </a>
                                                </Column>
                                                <Column size="lg-2">
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <div className="twitterIcon"></div>
                                                    </a>
                                                </Column>
                                            </div>
                                        </Row>
                                    </Column>
                                </Row>
                            </div>
                        </Column>
                    </Row>
                    </div>
                </Container>
                <Footer />
            </div>    
        )
    }
}

export default About;