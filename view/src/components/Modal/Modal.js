import React from "react";
import { Row, Container } from "../Grid";
import "./Modal.css";
import FormModal from "../FormModal"
import CloseModalButton from "../CloseModalButton";

class Modal extends React.Component {
	constructor(props) {
		super(props);
	}
		render() {
			return (
				<div className="addDrawModal">
						<Container fluid>
								<Row>
										<CloseModalButton onClick={this.props.handleClose}/>
										<b>Add New Draw Below:</b>
								</Row>
								<br />
							 <FormModal saveHandler={this.props.saveHandler} handleClose={this.props.handleClose} />
						</Container>
				</div>
			);
		}
};

export default Modal;
