import React from "react";
import { Row, Container } from "../Grid";
import "./Modal.css";
import FormModal from "../FormModal"
import CloseModalButton from "../CloseModalButton";

const Modal = props => (
    <div className="addDrawModal animated fadeIn">
        <Container fluid>
            <Row>
                <CloseModalButton onClick={props.handleClose}/>
                <b>Add New Draw Below:</b>
            </Row>
            <br />
           <FormModal handleClose={props.handleClose} />
        </Container>
    </div>
);

export default Modal;