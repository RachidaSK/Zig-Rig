import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";

class MyProjects extends Component {

    componentWillMount () {
        require( "./MyProjects.css" );
    }

    render() {
        return (
            <div>
                <NavBar />
                <br />
                <Container fluid>
                </Container>
            </div>
        )
    }        
}

export default MyProjects;