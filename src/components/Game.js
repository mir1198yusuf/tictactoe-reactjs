import React from "react";

import Board from "./Board.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Game.css";

class Game extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			boardValues : Array(9).fill(null),
			nextPlayer : "X"
		};

		this.disableClick = false;	//since this is not related to rendering DOM, this is not in state
	}

	squareClicked = (i) => {

		//winning condition reached
		if (this.disableClick){
			return;
		}

		//new board values
		let newBoardValues;
		newBoardValues = this.state.boardValues.slice();	//full slice & new array
		
		//if current square filled, return 
		if (newBoardValues[i]){
			return;
		}

		newBoardValues[i] = this.state.nextPlayer;	//update current square value
		
		//new nextplayer value
		let newNextPlayer = (this.state.nextPlayer==="X") ? "O" : "X";

		// check for win/draw condition in render because state update cannot be guaranteed immediately after setState

		//finally change state
		this.setState({
			boardValues : newBoardValues,
			nextPlayer : newNextPlayer
		});

	};

	checkWinStatus = (boardValues) => {

		let winStatus = null;

		if (
			(boardValues[0] && boardValues[0]===boardValues[1] && boardValues[1]===boardValues[2]) ||
			(boardValues[3] && boardValues[3]===boardValues[4] && boardValues[4]===boardValues[5]) ||
			(boardValues[6] && boardValues[6]===boardValues[7] && boardValues[7]===boardValues[8]) ||
			(boardValues[0] && boardValues[0]===boardValues[3] && boardValues[3]===boardValues[6]) ||
			(boardValues[1] && boardValues[1]===boardValues[4] && boardValues[4]===boardValues[7]) ||
			(boardValues[2] && boardValues[2]===boardValues[5] && boardValues[5]===boardValues[8]) ||
			(boardValues[0] && boardValues[0]===boardValues[4] && boardValues[4]===boardValues[8]) ||
			(boardValues[6] && boardValues[6]===boardValues[4] && boardValues[4]===boardValues[2])
			){

			//as per flow, the previous turn player will be winner
			let prevPlayer = (this.state.nextPlayer === "X") ? "O" : "X";
			winStatus = `Player ${prevPlayer} won!`;

			//disable clicking on square once winning condition reached
			this.disableClick = true;
		}

		//draw condition
		else if (
				boardValues[0] && boardValues[1] && boardValues[2] &&
				boardValues[3] && boardValues[4] && boardValues[5] &&
				boardValues[6] && boardValues[7] && boardValues[8] 
			){
			winStatus = "Game draw!"
		}

		//either null or some value
		return winStatus;
	};

	render(){

		let winStatus = this.checkWinStatus(this.state.boardValues);

		return (
			<div className="game" >
				<div className="row">
					<div className="col">
						<h2 className="p-2 text-center text-white bg-MediumSeaGreen" >
							Tictactoe in React.js
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Board 
							boardValues={this.state.boardValues} 
							nextPlayer={this.state.nextPlayer}
							winStatus={winStatus}
							squareClicked={this.squareClicked}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Game;