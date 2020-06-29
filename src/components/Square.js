import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Square.css";

class Square extends React.Component{

	render(){

		let bgColorSquare = (this.props.value) ? ((this.props.value==="X") ? "bg-Tomato" : "bg-Violet") : null; 

		return (
			<div 
				className={"p-4 border border-dark text-white rounded-lg " + bgColorSquare }
				onClick={this.props.squareClicked}	>
				{(this.props.value)}
			</div>
		);
	}
}

export default Square;