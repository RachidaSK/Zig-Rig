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
import { setIdToken, setAccessToken, isLoggedIn } from "../../components/Auth/Auth";
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyProjects from "../../pages/MyProjects";
import Footer from "../../components/Footer";

class BasicGen extends Component {
   
	constructor(props) {
		super(props);
		this.state = {
			project: {
                name: "",
                user: "",
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
        let userId = "";
        if (localStorage.getItem('id_token')) {
            let uid = localStorage.getItem('id_token');
            let userInfo = jwt_decode(uid);
            userId = userInfo.sub;
            console.log(userId);
        } else {
            setIdToken();
            setAccessToken();
            let token = localStorage.getItem('id_token');
            let userInfo = jwt_decode(token);
            userId = userInfo.sub;
        }

        let project = this.state.project;
        project.user = userId;
        this.setState({project});

        let id = this.props.match.params.id;
        if (id) {
            // let user = localStorage.getItem('id_token');
            let project = this.state.project;
            API.getProject(id) 
                .then(res => (
                    // project.user = res.data.user,
                    project.name = res.data.name,
                    project.generator = res.data.generator,
                    project.loads = res.data.loads,
                    this.setState({project})
                ),
                )
                .catch(err => console.log(err));
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
        event.preventDefault();
        let realProject = this.state.project;
        API.saveProject({
            name: realProject.name,
            generator: realProject.generator,
            loads: realProject.loads,
            user: realProject.user
        })
        .then(res => window.location.href="/myprojects")
        .catch(err => console.log(err));
        
	}

	toggleModalVisible = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		});
	}
	//BasicGen -> Modal -> FormModal -> AddButtonModal
	addNewLoad = (load) => {
        let newState = this.state;
        let connectionsArray = [0,0,0];
        if (load.phase==='Single Phase') {
               if (load.legs.L1) {
                    connectionsArray[0]=load.current*1;
               } else if (load.legs.L2) {
                    connectionsArray[1]=load.current*1;
               } else {
                    connectionsArray[2]=load.current*1;
               }
           } else { //it's 3-phase
                connectionsArray = [load.current/3,load.current/3,load.current/3];
           }	
        load.connections = connectionsArray;
		newState.project.loads.push(load);
		this.setState(newState);
	}

    calculateLoad=()=> {
        let genLoad = [0,0,0];
        //console.log(this.state.project.loads)
        for (let i=0;i<this.state.project.loads.length;i++) {
            let ampsAdded = [0,0,0];
            let load = this.state.project.loads[i];
            let current = Number(load.current);
            ampsAdded[0] = load.connections[0]*1;
            ampsAdded[1] = load.connections[1]*1;
            ampsAdded[2] = load.connections[2]*1;
            //Multiply by PF constant if inductive load
            if (load.type=='Inductive') {
              //  console.log('inductive mode happening');
                ampsAdded = ampsAdded.map(x => 0.8*x);
            }
            for (let j=0;j<genLoad.length;j++) {
                genLoad[j]+=ampsAdded[j];
            }
        }
       // console.log("Final Load: "+genLoad)
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
                                                <h5>L1: {(loads[0]*1).toFixed(2)}</h5>
                                                <h5>L2: {(loads[1]*1).toFixed(2)}</h5>
                                                <h5>L3: {(loads[2]*1).toFixed(2)}</h5>
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
