import React from "react";
import { Row, Column } from "../Grid";
import { InputModal } from "../InputModal";
// import LegsButtons from "../LegsButtons";
import AddButtonModal from "../AddButtonModal";

class FormModal extends React.Component {
    constructor(props) {
        super(props);
    }
  
    state = {
        name: "",
        phase: "",
        current: "",
        type: "",
        connections: {
            L1: null,
            L2: null,
            L3: null
        }
    }

    componentWillMount () {
        require( "./FormModal.css" );
    };

    handleInputModalChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    switchPhase = event => {
        let selectPhase = event.target.value;
		this.setState({
            phase: selectPhase,
            connections: {
                L1: "L1",
                L2: "L2",
                L3: "L3"
            },
			selectPhase: null,
		});
    };
    
    switchType = event => {
        let selectType = event.target.value;
		this.setState({
			type: selectType,
			selectType: null,
		});
    };
    
    toggleCheckbox = event => {
        let newState = [];
		newState[event.target.name] = event.target.checked;
		this.setState(newState);
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.props.saveHandler(this.state);
    }

    switchConnection = event => {
        const { name, value } = event.target;
        this.setState({
          connections: {
            [name]: value
          }
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <InputModal
                        value={this.name}
                        onChange={this.handleInputModalChange}
                        name="name"
                        placeholder="New Draw Title"
                    />
                </Row>
                <br />
                <Row>
                    <Column size="lg-4">
                        <Row>
                            <label id="phase1">
                                Phase:
                            </label>
                        </Row>
                        <Row>
                            <label className="checkbox">
                                <input type="radio" className="phase2 checkbox-control" checked={this.state.phase === 'Single Phase'} value="Single Phase" onChange={this.switchPhase}/>
                                <span className="checkbox-label">Single Phase</span>
                            </label>
                        </Row>
                        <Row>
                            <label className="checkbox">
                                <input type="radio" className="phase2 checkbox-control" checked={this.state.phase === 'Three Phase'} value="Three Phase" onChange={this.switchPhase}/>
                                <span className="checkbox-label">Three Phase</span>
                            </label>
                        </Row>
                    </Column>
                    <Column size="lg-4">
                        <Row>
                            <label id="type1">
                                Type:
                            </label>
                        </Row>
                        <Row>
                            <label className="checkbox">
                                <input type="radio" className="type2 checkbox-control" checked={this.state.type === 'Resistive'} value="Resistive" onChange={this.switchType}/>
                                <span className="checkbox-label3">Resistive</span>
                            </label>
                        </Row>
                        <Row>
                        <label className="checkbox">
                            <input type="radio" className="type2 checkbox-control" checked={this.state.type === 'Inductive'} value="Inductive" onChange={this.switchType}/>
                            <span className="checkbox-label">Inductive</span>
                        </label>
                        </Row>
                    </Column>
                    <Column size="lg-4">
                        <Row>
                            <label id="current">
                                Current:
                            </label>
                        </Row>
                        <Row>
                            <InputModal
                                value={this.current}
                                onChange={this.handleInputChange}
                                name="current"
                                placeholder="0"
                            />
                        </Row>
                    </Column>
                </Row>
                <br />
                <Row>
                    <Column size="lg-12">
                        <Row>
                            <label id="selectLegsLabel">
                                Select Legs:
                            </label>
                        </Row>
                        <Row>
                            <Column size="lg-2">
                                <Row>
                                    <label className="checkbox">
                                        <input id="L1" type="radio" name="L1" className="checkbox-control" checked={this.state.connections.L1} value="L1" onChange={this.switchConnection}/>
                                        <span className="checkbox-label">L1</span>
                                    </label>
                                </Row>
                            </Column>
                            <Column size="lg-2">
                                <Row>
                                    <label className="checkbox">
                                        <input id="L2" type="radio" name="L2" className="checkbox-control" checked={this.state.connections.L2} value="L2" onChange={this.switchConnection}/>
                                        <span className="checkbox-label">L2</span>
                                    </label>
                                </Row>
                            </Column>
                            <Column size="lg-4">
                                <Row>
                                    <label className="checkbox">
                                        <input id="L3" type="radio" name="L3" className="checkbox-control" checked={this.state.connections.L3} value="L3" onChange={this.switchConnection}/>
                                        <span className="checkbox-label">L3</span>
                                    </label>
                                </Row>
                            </Column>
                            <Column size="lg-4">
                                <Row>
                                    <AddButtonModal onClick={this.handleFormSubmit}/>
                                </Row>
                            </Column>
                        </Row>
                    </Column>
                </Row>  
            </div>

        )
    }
}

export default FormModal;
