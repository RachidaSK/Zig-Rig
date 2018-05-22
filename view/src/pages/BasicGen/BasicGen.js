import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddNewDraw from "../../components/AddNewDraw";
import DeleteProject from "../../components/DeleteProject";
import RepeatSource from "../../components/RepeatSource";
import SaveButton from "../../components/SaveButton";
import OpenProject from "../../components/OpenProject";
import { Row, Container } from "../../components/Grid";
import { InputProject } from "../../components/InputProject";
import Modal from "../../components/Modal";
import {PDF} from '../../components/PDF';

class BasicGen extends Component {
    state = {
        project: "",
        modalVisible: false
    }

    componentWillMount () {
        require( "./BasicGen.css" );
    }

    handleInputChange = event => {

    }

    handleAddNewDraw = event => {
        this.toggleModalVisible();
    }

    handleSaveButton = event => {
        
    }

    handleOpenProject = event => {

    }

    handleDeleteProject = event => {

    }

    handleRepeatSource = event => {

    }

    toggleModalVisible () {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    render() {
        return (
            <div>
                {this.state.modalVisible && <Modal />}
                <img id="homeLogo" src="/images/logo.png" alt="Zig-Rig Logo" />
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
                            <InputProject
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
                            <AddNewDraw onClick={this.handleAddNewDraw} 
                            >
                            Add New Draw
                            </AddNewDraw>
                        </Row>
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
                            </div>
                            <div id="math">
                                <i id="math1">0</i><i id="math2">0</i><i id="math3">0</i><i id="mathN">0</i> 
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
