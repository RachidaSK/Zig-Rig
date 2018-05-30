import React from "react";
import { Row, Column, Container } from "../Grid";
import EditButton from "../EditButton";
import "./BuiltLoadComponent.css";

const BuiltLoadComponent = (props) => (
    <Container fluid>
        <Row>
            <Column className="builtComponentColumn" size="lg-12">
                <div className="builtComponentDiv">
                    <Row>
                        <Column size="lg-12 md-12 sm-12">
                            <div className="savedLoadTitle">
                            <Column size="lg-12 md-12 sm-12">
                                <b>Load Name:</b> 
                            </Column> 
                            <Column size="lg-12 md-12 sm-12">
                                {props.loadData.name}
                            </Column>
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-4 md-12 sm-12">
                            <div className="savedProjectPhase">
                                <Column size="lg-4 md-12 sm-12">
                                    <b>Phase:</b> {props.loadData.phase}
                                </Column>
                            </div>
                        </Column>
                        <Column size="lg-4 md-12 sm-12">
                            <div className="savedProjectType">
                                <Column size="lg-4 md-12 sm-12">
                                    <b>Type:</b> {props.loadData.type}
                                </Column>
                            </div>
                        </Column>
                        <Column size="lg-4 md-12 sm-12">
                            <div className="savedProjectCurrent">
                                <Column size="lg-4 md-12 sm-12">
                                    <b>Current:</b> {props.loadData.current*1}
                                </Column>
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-10">
                            <div className="savedProjectLegs">
                                <Column size="lg-12 md-12 sm-12">
                                    <b>Legs:</b>
                                </Column>
                                <Column size="lg-12 md-12 sm-12">
                                    L1: {Object.values(props.loadData.connections[0])}  L2: {Object.values(props.loadData.connections[1])}  L3: {Object.values(props.loadData.connections[2])} 
                                </Column>
                            </div>
                        </Column>
                        <Column size="lg-2">
                            <div className="editLoadButton">
                                <EditButton />
                            </div>
                        </Column>
                    </Row>
                </div>
            </Column>
        </Row>
    </Container>

)

export default BuiltLoadComponent;