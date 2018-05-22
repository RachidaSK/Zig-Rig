import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddNewDraw from "../../components/AddNewDraw";
import RepeatSource from "../../components/RepeatSource";
import SaveButton from "../../components/SaveButton";
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

    toggleModalVisible = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.modalVisible && <Modal handleClose={this.toggleModalVisible} />}
                <Container fluid>
                    <div className="homeContainer">
                        <div>
                            <div id="buttonsRow">
                                <Row>
                                    <SaveButton onClick={this.handleSaveButton}
                                    >
                                    Save
                                    </SaveButton>
                                    <AddNewDraw onClick={this.handleAddNewDraw} 
                                    >
                                    Add New Draw
                                    </AddNewDraw>
                                    <PDF /> 
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
                        </div>
                        <br />
                        <div>
                            <Row>
                                <div className="genDiv">
                                    <img className="generatorCartoon" src="/images/generatorWhite.png" />
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
                    </div>    
                </Container>
            </div>
        )
    }
}

export default BasicGen;
