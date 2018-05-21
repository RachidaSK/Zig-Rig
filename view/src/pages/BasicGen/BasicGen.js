import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddSource from "../../components/AddSource";
import DeleteProject from "../../components/DeleteProject";
import RepeatSource from "../../components/RepeatSource";
import SaveButton from "../../components/SaveButton";
import OpenProject from "../../components/OpenProject";
import { Row, Container } from "../../components/Grid";
import { Input } from "../../components/Forms";
import {PDF} from '../../components/PDF';

class BasicGen extends Component {
    state = {
        project: ""
    }

    componentWillMount () {
        const css = require( "./BasicGen.css" );
    }

    handleInputChange = event => {

    }

    handleAddSource = event => {

    }

    handleSaveButton = event => {
        
    }

    handleOpenProject = event => {

    }

    handleDeleteProject = event => {

    }

    handleRepeatSource = event => {

    }

    render() {
        return (
            <div>
                <img id="logo" src="/images/logo.png" alt="Zig-Rig Logo" className="center" />
                <NavBar />
                <br />
                <Container fluid>
                    <div className="topDiv">
                        <Row>
                            <SaveButton onClick={this.handleSaveButton}
                            >
                            Save
                            </SaveButton>
                            <OpenProject onClick={this.handleOpenProject}
                            >
                            Open
                            </OpenProject>
                            <DeleteProject onClick={this.handleDeleteProject}
                            >
                            Delete
                            </DeleteProject>
														<PDF/>
                        </Row>
                        <br />
                        <Row>
                            <Input
                                value={this.state.project}
                                onChange={this.handleInputChange}
                                name="project"
                                placeholder="Project Title"
                            />
                        </Row>
                    </div>
                    <br />
                    <div className="lowerDiv">
                        <Row>
                            <AddSource onClick={this.handleAddSource} 
                            >
                            Add New Power Source
                            </AddSource>
                        </Row>
                        <br />
                        <Row>
                            <RepeatSource onClick={this.handleRepeatSource}
                            >
                            Repeat Source
                            </RepeatSource>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default BasicGen;
