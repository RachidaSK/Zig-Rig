import React from "react";
import { Row, Column } from "../Grid";
import { InputModal } from "../InputModal";
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
        legs: {
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
        this.props.handleClose(this.state);

    }

    switchConnection = event => {
        const { name, value } = event.target;
        this.setState({
          legs: {
            [name]: value
          }
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <Column size="lg-12">
                        <InputModal
                            value={this.name}
                            onChange={this.handleInputModalChange}
                            name="name"
                            placeholder="New Draw Title"
                        />
                    </Column>
                </Row>
                <br />
                <Row>
                    <Column size="lg-4">
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label id="phase1">
                                    Phase:
                                </label>
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label className="checkbox">
                                    <input type="radio" className="phase2 checkbox-control" checked={this.state.phase === 'Single Phase'} value="Single Phase" onChange={this.switchPhase}/>
                                    <span className="checkbox-label"> Single Phase</span>
                                </label>
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label className="checkbox">
                                    <input type="radio" className="phase2 checkbox-control" checked={this.state.phase === 'Three Phase'} value="Three Phase" onChange={this.switchPhase}/>
                                    <span className="checkbox-label"> Three Phase</span>
                                </label>
                            </Column>
                        </Row>
                    </Column>
                    <Column size="lg-4">
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label id="type1">
                                    Type:
                                </label>
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label className="checkbox">
                                    <input type="radio" className="type2 checkbox-control" checked={this.state.type === 'Resistive'} value="Resistive" onChange={this.switchType} />
                                    <span className="checkbox-label3"> Resistive</span>
                                </label>
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12 md-12 sm-12">
                                <label className="checkbox">
                                    <input type="radio" className="type2 checkbox-control" checked={this.state.type === 'Inductive'} value="Inductive" onChange={this.switchType} />
                                    <span className="checkbox-label"> Inductive</span>
                                </label>
                            </Column>
                        </Row>
                    </Column>
                    <Column size="lg-4">
                        <Row>
                            <Column size="lg-12">
                                <label id="current">
                                    Current:
                                </label>
                            </Column>
                        </Row>
                        <Row>
                            <Column size="lg-12">
                                <InputModal
                                    value={this.current}
                                    onChange={this.handleInputChange}
                                    name="current"
                                    placeholder="0"
                                />
                            </Column>
                        </Row>
                    </Column>
                </Row>
                <br />
                <Row>
                    <Column size="lg-12 md-12 sm-12">
                        <label id="selectLegsLabel">
                            Select Legs:
                        </label>
                    </Column>
                    <br />
                    <Column size="lg-2 md-4 sm-12">
                        <label className="checkbox">
                            <input id="L1" type="radio" name="L1" className="checkbox-control" checked={this.state.phase === "Three Phase" || this.state.legs.L1} value="L1" onChange={this.switchConnection}/>
                            <span className="checkbox-label">L1</span>
                        </label>
                    </Column>
                    <Column size="lg-2 md-4 sm-12">
                        <label className="checkbox">
                            <input id="L2" type="radio" name="L2" className="checkbox-control" checked={this.state.phase === "Three Phase" || this.state.legs.L2} value="L2" onChange={this.switchConnection}/>
                            <span className="checkbox-label">L2</span>
                        </label>
                    </Column>
                    <Column size="lg-4 md-4 sm-12">
                        <label className="checkbox">
                            <input id="L3" type="radio" name="L3" className="checkbox-control" checked={this.state.phase === "Three Phase" || this.state.legs.L3} value="L3" onChange={this.switchConnection}/>
                            <span className="checkbox-label">L3</span>
                        </label>
                    </Column>
                    <Column size="lg-4 md-12 sm-12">
                        <AddButtonModal onClick={this.handleFormSubmit}/>
                    </Column>
                </Row> 
            </div>

        )
    }
}

export default FormModal;
