import React from "react";
import { Row, Column, Container } from "../Grid";
import "./BuiltLoadComponent.css";

const BuiltLoadComponent = (props) => (
    <Container fluid>
        <Row>
            <Column className="builtComponentColumn" size="lg-8">
                <div className="builtComponentDiv">
                    <Row>
                        <Column size="lg-12">
                            <div className="savedLoadTitle">
                                Load Name: {props.loadData.name}
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-4">
                            <div className="savedProjectPhase">
                                Phase: {props.loadData.phase}
                            </div>
                        </Column>
                        <Column size="lg-4">
                            <div className="savedProjectType">
                                Type: {props.loadData.type}
                            </div>
                        </Column>
                        <Column size="lg-4">
                            <div className="savedProjectCurrent">
                                Current: {props.loadData.current*1}
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-12">
                            <div className="savedProjectLegs">

                                Legs: L1: {Object.values(props.loadData.connections[0])}  L2: {Object.values(props.loadData.connections[1])}  L3: {Object.values(props.loadData.connections[2])} 


                            </div>
                        </Column>
                    </Row>
                </div>
            </Column>
        </Row>
    </Container>

)

export default BuiltLoadComponent;