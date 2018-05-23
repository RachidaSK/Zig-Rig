import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
// import DeleteButton from "../../components/DeleteButton";

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
                    <div className="myProjectsContainer">
                        <Row>
                            <Column size="lg-12">
                                <h6>Example Project #1</h6>
                                {/* <DeleteButton /> */}
                            </Column>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }        
}

export default MyProjects;