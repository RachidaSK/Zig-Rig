import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import AddNewDraw from "../../components/AddNewDraw";
import SaveButton from "../../components/SaveButton";
import { Row, Column, Container } from "../../components/Grid";
import { InputProject } from "../../components/InputProject";
import Modal from "../../components/Modal";
import {PDF} from '../../components/PDF';

class BasicGen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "New Project",
			project: {
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
		const { loads } = this.state.project;
		const newLoads = loads.concat(load);

		this.setState({
			project: {
				loads: newLoads
			}
		});
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
					<div className="homeContainer">
						<div>
							<Row>
								<Column size="lg-7">
									<SaveButton onClick={this.handleSaveButton}>
										Save
									</SaveButton>
									<AddNewDraw 
										onClick={this.handleAddNewDraw}
									>
										Add New Draw
									</AddNewDraw>
									<PDF /> 
								</Column>
							</Row>
							<br />
							<Row>
								<Column size="lg-7">
									<InputProject
										value={this.state.name}
										onChange={this.handleInputChange}
										name="project"
										placeholder="Project Title"
									/>
								</Column>
							</Row>
							<br />
							<Row>
								<Column size="lg-7">
									<div className="currentLegTotalsModalHome">
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
							<hr />
							<br />
							<div id="templatesDiv">
								<Row>
									<Column size="lg-7">
										<h4 id="loadTemplatesHeader">Load Templates:</h4>
										<div className="loadTemplateExample1">Example #1</div>
										<div className="loadTemplateExample2">Example #2</div>
										<div className="loadTemplateExample3">Example #3</div>
									</Column>
								</Row> 
								<Row>
									<Column size="lg-3">
										<div className="genDiv">
											<img className="generatorCartoon" src="/images/generatorWhite.png" alt="Generator"/>
										</div>
									</Column>
								</Row>
							</div>
						</div>
					</div>    
				</Container>
			</div>
		];
	}
}

export default BasicGen;
