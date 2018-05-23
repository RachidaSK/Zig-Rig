import React from "react";
import { Row, Column } from "../../components/Grid";
import { InputModal } from "../InputModal";
import LegsButtons from "../LegsButtons";
import AddButtonModal from "../AddButtonModal";

class FormModal extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        newDrawInput: "",
        phase: "",
        current: "",
        type: ""
    }

    componentWillMount () {
        require( "./FormModal.css" );
    }

    handleInputModalChange = event => {

    }

    handleButtonSelect = event => {
        this.setState({
            
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Column size="lg-12">
                        <InputModal
                            value={this.newDrawInput}
                            onChange={this.handleInputModalChange}
                            name="newDrawInput"
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
                        <InputModal
                            value={this.phase}
                            onChange={this.handleInputChange}
                            name="phase"
                            placeholder="Single Phase"
                        />
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
                    <Column size="lg-4">
                        <label>
                            Type:
                        </label>
                        <InputModal
                            value={this.type}
                            onChange={this.handleInputChange}
                            name="type"
                            placeholder="Resistive"
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
                        <LegsButtons onClick={this.handleButtonSelect}>
                        L1
                        </LegsButtons>
                    </Column>
                    <Column size="lg-2">
                        <LegsButtons onClick={this.handleButtonSelect}>
                        L2
                        </LegsButtons>
                    </Column>
                    <Column size="lg-2">
                        <LegsButtons onClick={this.handleButtonSelect}>
                        L3
                        </LegsButtons>
                    </Column>
                    <Column size="lg-2">
                        <LegsButtons onClick={this.handleButtonSelect}>
                        N
                        </LegsButtons>
                    </Column>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <b className="currentLegTotalsModal">Current Leg Totals:</b><br/>
                    <b className="currentLegTotalsModal">L1:</b> <i>0</i>  <b>L2:</b> <i>0</i>  <b>L3:</b> <i>0</i>  <b>N:</b> <i>0</i>
                    <AddButtonModal />
                </Row>
            </div>

        )
    }
}

export default FormModal;