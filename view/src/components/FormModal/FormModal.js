import React from "react";
import { Row, Column, Container } from "../../components/Grid";
import { InputModal } from "../InputModal";
import LegsButtons from "../LegsButtons";
import Dropbox from "../Dropbox";
import AddButtonModal from "../AddButtonModal";
import DeleteBtn from "../DeleteBtn";

class FormModal extends React.Component {
    state = {
        newDrawInput: "",
        voltage: "",
        amperage: "",
        wattage: "",
        modalVisible: true
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

    closeModal = event => {
        this.toggleModalVisible();
    };

    toggleModalVisible () {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    };

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <DeleteBtn onClick={this.closeModal}/>
                        <b>Add New Draw Below:</b>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-12">
                            <InputModal
                                value={this.newDrawInput}
                                onChange={this.handleInputModalChange}
                                name="newDrawInput"
                                placeholder="   New Draw Title"
                            />
                        </Column>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Column size="lg-4">
                            <label>
                                Voltage:
                            </label>
                            <InputModal
                                value={this.voltage}
                                onChange={this.handleInputChange}
                                name="voltage"
                                placeholder="   0"
                            />
                        </Column>
                        <Column size="lg-4">
                            <label>
                                Amperage:
                            </label>
                            <InputModal
                                value={this.amperage}
                                onChange={this.handleInputChange}
                                name="amperage"
                                placeholder="   0"
                            />
                        </Column>
                        <Column size="lg-4">
                            <label>
                                Wattage:
                            </label>
                            <InputModal
                                value={this.wattage}
                                onChange={this.handleInputChange}
                                name="wattage"
                                placeholder="   0"
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

                </Container>
            </div>

        )
    }
}

export default FormModal;