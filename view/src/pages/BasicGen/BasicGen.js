import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddSource from "../../components/AddSource";
import DeleteProject from "../../components/DeleteProject";
import RepeatSource from "../../components/RepeatSource";
import SaveButton from "../../components/SaveButton";
import OpenProject from "../../components/OpenProject";
import { Row, Container } from "../../components/Grid";
import { Input } from "../../components/Forms";

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
                        <br />
                        <Row>
                            <RepeatSource onClick={this.handleRepeatSource}
                            >
                            Repeat Source
                            </RepeatSource>
                        </Row>
                    </div>
                    <div className="rightDiv">
                        <Row>
                            <div className="genDiv">
                                <h1>Generator #1</h1>
                                <div id="math">
                                    <i id="math1"></i><i id="math2"></i><i id="math3"></i><i id="mathN"></i> 
                                </div>
                            </div>
                            <div className="legs">
                                <b id="l1">L1</b><b id="l2">L2</b><b id="l3">L3</b><b id="n">N</b>
                            </div>
                            <div className="lines">
                                <div id="line1">|</div><div id="line2">|</div><div id="line3">|</div><div id="line4">|</div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default BasicGen;