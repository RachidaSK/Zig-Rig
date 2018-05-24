import React from "react";
import { Row, Column } from "../../components/Grid";
import { InputModal } from "../InputModal";
import LegsButtons from "../LegsButtons";
import AddButtonModal from "../AddButtonModal";
import Select from 'react-select';


class FormModal extends React.Component {
    constructor(props) {
        super(props);
    }
  
    state = {
        name: "",
        phase: "",
        current: "",
        type: "",
        L1: "",
        L2: "",
        L3: "",
        N: ""
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
                <br />
                <Row>
                    <Column size="lg-4">
                        <label>
                            Phase:
                        </label>
                        <label className="checkbox">
                            <input type="radio" className="checkbox-control" checked={this.state.phase === 'Single Phase'} value="Single Phase" onChange={this.switchPhase}/>
                            <span className="checkbox-label">Single Phase</span>
                        </label>
                        <label className="checkbox">
                            <input type="radio" className="checkbox-control" checked={this.state.phase === '3 Phase'} value="3 Phase" onChange={this.switchPhase}/>
                            <span className="checkbox-label">3 Phase</span>
                        </label>
                    </Column>
                    <Column size="lg-4">
                        <label>
                            Type:
                        </label>
                        <label className="checkbox">
                            <input type="radio" className="checkbox-control" checked={this.state.type === 'Resistive'} value="Resistive" onChange={this.switchType}/>
                            <span className="checkbox-label">Resistive</span>
                        </label>
                        <label className="checkbox">
                            <input type="radio" className="checkbox-control" checked={this.state.type === 'Inductive'} value="Inductive" onChange={this.switchType}/>
                            <span className="checkbox-label">Inductive</span>
                        </label>
                    </Column>
                    <Column size="lg-4">
                        <label>
                            Current:
                        </label>
                        <InputModal
                            value={this.current}
                            onChange={this.handleInputChange}
                            name="current"
                            placeholder="0"
                        />
                    </Column>
                    
                </Row>
                <br />
                <br />
                <Row>
                    <label id="selectLegsLabel">
                        Select Legs:
                    </label>
                    <br />
                    <br />
                    <Column size="lg-2">
                    <label className="checkbox2">
						<input type="checkbox" className="checkbox-control2" name="L1" checked={this.state.L1} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">L1</span>
					</label>
                    </Column>
                    <Column size="lg-2">
                    <label className="checkbox2">
						<input type="checkbox" className="checkbox-control2" name="L2" checked={this.state.L2} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">L2</span>
					</label>
                    </Column>
                    <label className="checkbox2">
						<input type="checkbox" className="checkbox-control2" name="L3" checked={this.state.L3} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">L3</span>
					</label>
                    <Column size="lg-2">
                    </Column>
                    <Column size="lg-2">
                    <label className="checkbox2">
						<input type="checkbox" className="checkbox-control2" name="N" checked={this.state.N} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">N</span>
					</label>
                    </Column>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <b className="currentLegTotalsModal">Current Leg Totals:</b><br/>
                    <b className="currentLegTotalsModal">L1:</b> <i>0</i>  <b>L2:</b> <i>0</i>  <b>L3:</b> <i>0</i>  <b>N:</b> <i>0</i>
                    <AddButtonModal onClick={this.props.saveHandler}/>
                </Row>
            </div>

        )
    }
}

export default FormModal;
