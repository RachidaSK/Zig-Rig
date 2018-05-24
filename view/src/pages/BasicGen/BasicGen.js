import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import NavBar from "../../components/NavBar";
import AddNewDraw from "../../components/AddNewDraw";
import SaveButton from "../../components/SaveButton";
import { Row, Column, Container } from "../../components/Grid";
import { InputProject } from "../../components/InputProject";
import Modal from "../../components/Modal";
import {PDF} from '../../components/PDF';
import BuiltLoadComponent from "../../components/BuiltLoadComponent";
import '../../components/Auth/Auth';
import { setIdToken, setAccessToken } from "../../components/Auth/Auth";

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

    componentDidMount () {
        // setIdToken();
        if (localStorage.getItem('id_token') > 0) {
            let uid = localStorage.getItem('id_token');
            console.log(uid);
        } else {
            setIdToken();
            setAccessToken();
            let token = localStorage.getItem('id_token');
            let userInfo = jwt_decode(token);
            let userId = userInfo.sub;
            console.log(token);
            console.log(userInfo);
            console.log(userId);
        }
    }

	
    handleInputChange = event => {
        const { value } = event.target;
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

    calculateLoad=()=> {
        let genLoad = [0,0,0];
        console.log(this.state.project.loads)
        for (let i=0;i<this.state.project.loads.length;i++) {
            let ampsAdded = [0,0,0];
            let load = this.state.project.loads[i];
            let current = Number(load.current);
            console.log(load.phase)
            if (load.phase==='Single Phase') {
                console.log('executing single-phase');
                console.log('connection:'+load.connections);
                if (load.connections.L1) {
                    ampsAdded[0]=current;
                } else if (load.connections.L2) {
                    ampsAdded[1]=current;
                } else {
                    ampsAdded[2]=current;
                }
                console.log('Amps to be added: '+ampsAdded)
            } else { //it's 3-phase
                console.log("Executing 3-phase calc");
                ampsAdded = [current/3,current/3,current/3];
                console.log('Amps to be added: '+ampsAdded)
            }	
            //Multiply by PF constant if inductive load
            if (load.type=='Inductive') {
                console.log('inductive mode happening');
                ampsAdded = ampsAdded.map(x => 0.8*x);
            }
            for (let j=0;j<genLoad.length;j++) {
                genLoad[j]+=ampsAdded[j];
            }
        }
        console.log("Final Load: "+genLoad)
        return genLoad;
    }


    render() {
        let loads = this.calculateLoad();
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
                                <br />
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
                                    <Column size="lg-4">
                                        <div className="loadTemplateExample1">Example #1</div>
                                    </Column>
                                    <Column size="lg-4">
                                        <div className="loadTemplateExample2">Example #2</div>
                                    </Column>
                                    <Column size="lg-4">        
                                        <div className="loadTemplateExample3">Example #3</div>
                                    </Column>
                                </Row>
                                {/* </div> */}
                                <Row>
                                    <Column size="lg-12">
                                        <div className="currentLegTotalsHome">
                                            <h4>Current Leg Totals:</h4>
                                            <ul>
                                                <h5>L1: {loads[0]}</h5>
                                                <h5>L2: {loads[1]}</h5>
                                                <h5>L3: {loads[2]}</h5>
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
                                        {this.state.project.loads.length ? (
                                            this.state.project.loads.map(load => (
                                                <BuiltLoadComponent loadData={load} />
                                            ))
                                        ) : <h2>No loads to display.</h2>}
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
