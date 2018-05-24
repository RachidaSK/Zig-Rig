import React from "react";
import { Row, Column, Container } from "../Grid";
import "./Footer.css"

const Footer = () => (
    <footer id="footer">
        <Container fluid>
            <Row>
                <Column size="lg-1" className="arrow">
                    <div className="arrowUp">
                        <a id="backToHome" href="/home">
                            <img id="upArrow" src="/images/black-arrowC.png" alt="Back To Top" />
                        </a>
                    </div>
                </Column>
                <Column size="lg-7">
                    <Row>
                       <div className="aboutContent"> 
                             <Column size="lg-3">
                                <h3 className="footerHeaders">Home</h3>
                                    <a id="homeFooter" href="/home">
                                        Home
                                    </a>
                            </Column>
                             <Column size="lg-3">
                                <h3 className="footerHeaders">About</h3>
                                    <a id="aboutZR" href="/aboutzigrig">
                                        About ZigRig
                                    </a><br />
                                    <a id="aboutTeam" href="/aboutus">
                                        About the Team
                                    </a><br />
                                    <a id="terms" href="/terms">
                                        Terms of Service
                                    </a>
                            </Column>
                        </div>
                        <Column size="lg-3">
                            <h3 className="footerHeaders">Contact</h3>
                                <a id="contactUs" href="/contactus">
                                    Contact Us
                                </a><br />
                                <a id="faq" href="/faqs">
                                    FAQs
                                </a>
                        </Column>
                    </Row>
                </Column>
                <Column size="lg-2">
                    <Row>
                        <Column size="lg-12">
                            <img id="footerLogo" src="/images/logo.png" alt="Zig-Rig Logo" />
                        </Column>
                    </Row>
                    <Row>
                        <div className="socialMediaIcons">
                            <Column size="lg-3">
                                <a href="https://github.com/mhgerov/Zig-Rig" target="_blank">
                                    <div className="githubIcon"></div>
                                </a>
                            </Column>
                            <Column size="lg-3">
                                <a href="https://www.linkedin.com/in/" target="_blank">
                                    <div className="linkedInIcon"></div>
                                </a>
                            </Column>
                            <Column size="lg-3">
                                <a href="https://www.instagram.com/" target="_blank">
                                    <div className="instagramIcon"></div>
                                </a>
                            </Column>
                            <Column size="lg-3">
                                <a href="https://twitter.com/" target="_blank">
                                    <div className="twitterIcon"></div>
                                </a>
                            </Column>
                        </div>
                    </Row>
                </Column>
            </Row>
            <Row>
                <div className="zrCopy">
                    <Column size="lg-4">
                        <h3 className="copyright">© | ZigRig | 2018</h3>
                    </Column>
                </div>
            </Row>
        </Container>
    </footer>
);

export default Footer;