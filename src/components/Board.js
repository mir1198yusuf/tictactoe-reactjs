import React from "react";

import Square from "./Square.js";
import Panel from "./Panel.js";

import "./Board.css";

import 'bootstrap/dist/css/bootstrap.min.css';

class Board extends React.Component{

	renderSquare = i => (
		<Square 
			value={this.props.boardValues[i]} 
			squareClicked={() => this.props.squareClicked(i)}
		/>

	);

	render(){

		return (
			<div id="board">
				<div className="row">
					<div className="col">
						<Panel 
							nextPlayer={this.props.nextPlayer} 
							winStatus={this.props.winStatus}
						/>
					</div>
				</div>
				<div className="row mt-4 mx-auto max-content-width">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="row mx-auto max-content-width">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="row mx-auto max-content-width">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;