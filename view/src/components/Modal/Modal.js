import React from "react";
import { Row, Container } from "../Grid";
import "./Modal.css";
import FormModal from "../FormModal"
import CloseModalButton from "../CloseModalButton";

const Modal = props => (
    <div className="addDrawModal">
        <Container fluid>
            <Row>
                <CloseModalButton onClick={props.handleClose}/>
                <b id="newDraw">New Draw:</b>
            </Row>
            <br />
           <FormModal handleClose={props.handleClose} />
        </Container>
    </div>
);

export default Modal;