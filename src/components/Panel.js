import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";

import "./Panel.css";

class Panel extends React.Component{

	render(){

		let statusMessage;
		if (!this.props.winStatus){
			statusMessage = `Player ${this.props.nextPlayer} turn`;
		}
		else{
			statusMessage = this.props.winStatus;
		}

		return (
			<Alert className="mx-auto max-content-width text-center text-white bg-DodgerBlue" >
					{statusMessage}
			</Alert>
		);
	}
}

export default Panel;