import React from "react";
import { Row, Container } from "../../components/Grid";
import "./Modal.css";
import FormModal from "../FormModal"
import DeleteBtn from "../DeleteBtn";

const Modal = props => (
    <div className="addDrawModal">
        <Container fluid>
            <Row>
                <DeleteBtn onClick={props.handleClose}/>
                <b>Add New Draw Below:</b>
            </Row>
            <br />
           <FormModal handleClose={props.handleClose} />
        </Container>
    </div>
);

export default Modal;