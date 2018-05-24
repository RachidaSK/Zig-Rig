import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddNewDraw from "../../components/AddNewDraw";
import SaveButton from "../../components/SaveButton";
import { Row, Column, Container } from "../../components/Grid";
import { InputProject } from "../../components/InputProject";
import Modal from "../../components/Modal";
import {PDF} from '../../components/PDF';
import Footer from "../../components/Footer";

class BasicGen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {
				name: "New Project",
				generator: {
					capacity: null,
				},
				loads: [],
			}
		}
	}
	componentWillMount () {
		require( "./BasicGen.css" );
	}

    handleInputChange = event => {
        const {value} = event.target;
        const { project } = this.state;
        project.name = value;
        this.setState({ project });
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
	//BasicGen -> Modal -> FormModal -> AddButtonModal
	addNewLoad = (load) => {
		// this.state.project.loads = this.state.project.loads.concat({
		// 	name: "Dummy Load",
		// 	current: 20,
		// 	phase: "single",
		// 	connection: "L1",
		// 	type: "resistive",
		// });
		// ___________________LOADS UPDATE FUNCTION
		// const { loads } = this.state.project;
		// const newLoads = loads.concat(load);

		// this.setState({
		// 	project: {
		// 		loads: newLoads
		// 	}
		// });
		// ________________________________________

		let newState = this.state;
		console.log(load);
		console.log(newState);
		newState.project.loads.push(load);
		console.log(newState);
		this.setState(newState);


		// const { loads } = this.state.project;
		// const newLoads = loads.concat(load);

		// this.setState({
		// 	project: {
		// 		loads: newLoads
		// 	}
		// });
	}

    render() {
        return [
            this.state.modalVisible ? (
				<Modal
					saveHandler={this.addNewLoad} 
					handleClose={this.toggleModalVisible}
				/>
			) : null,
            <div className={`pageWrapper ${this.state.modalVisible && "blurred"}`}>
                <NavBar />
                <Container fluid>
                    <div className="homeContainer animated fadeInLeftBig">
                        <Row>
                            <Column size="lg-6">
                                <Row>
                                    <Column size="lg-12">
                                        <SaveButton onClick={this.handleSaveButton}
                                        >
                                        Save
                                        </SaveButton>
                                        <AddNewDraw onClick={this.handleAddNewDraw} 
                                        >
                                        Add New Draw
                                        </AddNewDraw>
                                        <PDF /> 
                                    </Column>
                                </Row>
                                <Row>
                                    <Column size="lg-12">
                                        <InputProject
                                            value={this.state.project.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder="Project Title"
                                        />
                                    </Column>
                                </Row>
                                {/* <div id="templatesDiv"> */}
                                <Row>
                                    <Column size="lg-12">
                                        <h4 id="loadTemplatesHeader">Load Templates:</h4>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column size="lg-3">
                                        <div className="loadTemplateExample1">Example #1</div>
                                    </Column>
                                    <Column size="lg-3">
                                        <div className="loadTemplateExample2">Example #2</div>
                                    </Column>
                                    <Column size="lg-3">        
                                        <div className="loadTemplateExample3">Example #3</div>
                                    </Column>
                                </Row>
                                {/* </div> */}
                                <Row>
                                    <Column size="lg-12">
                                        <div className="currentLegTotalsHome">
                                            <h4>Current Leg Totals:</h4>
                                            <ul>
                                                <h5>L1:</h5>
                                                <h5>L2:</h5>
                                                <h5>L3:</h5>
                                                <h5>N:</h5>
                                            </ul>
                                        </div>
                                    </Column>    
                                </Row>
                            </Column>
                            <Column size="lg-6">
                                <Row>
                                    <Column size="lg-12" className="genDiv">
                                        <img className="generatorImage" src="/images/generatorO.png" alt="Generator"/>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column className="newLoadDiv" size="lg-12">
                                        <h3>New Load</h3>
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </div>    
                </Container>
                <Footer />
            </div>
        ];
    }
}

export default BasicGen;
