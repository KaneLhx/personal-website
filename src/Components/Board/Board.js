import React, {Component} from 'react';
import Square from '../../Components/Square/Square.js';
import './Board.css';


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
        }
    }

    onClickBoard(value) {
        const squares = this.state.squares.slice(); // copy the array list using slice for immutability
        if (this.determineWinner() || this.isGameDrawn()) {
            return;
        }
        squares[value] = this.state.nextPlayerX? 'X' : 'O';
        this.setState(
            {
                squares: squares, // set the state of all the squares
                nextPlayerX: !this.state.nextPlayerX, // set it to the next player
            }
        );
    }

    showSquare(value) {
        return <Square value={this.state.squares[value]} key={value} onClick={() => this.onClickBoard(value)} />
    }

    createBoard() {
        const NUM = 3;
        let rowIndex = 0;
        let board = [];
        for (let i=0; i<NUM; i++) {
            let rows = [];
            for (let j=rowIndex; j<rowIndex+NUM; j++) {
                rows.push(this.showSquare(j));
            }
            board.push(<div className="board" key={i}>{rows}</div>);
            rowIndex += 3;
        }

        return board;
    }

    determineWinner() {
        return (this.isHorizontalWin())|| (this.isVerticalWin()) || (this.isDiagonalWin());
    }

    isGameDrawn() {
        return !this.state.squares.includes(null);
    }
    
    isHorizontalWin() {
        const i = 0;
        return (
            (this.state.squares[i] && this.state.squares[i] === this.state.squares[i + 1] && this.state.squares[i + 1] === this.state.squares[i + 2]) ||
            (this.state.squares[i + 3]  && this.state.squares[i + 3] === this.state.squares[i + 4] && this.state.squares[i + 4] === this.state.squares[i + 5]) ||
            (this.state.squares[i + 6] && this.state.squares[i + 6] === this.state.squares[i + 7] && this.state.squares[i + 7] === this.state.squares[i + 8])
        );
    }

    isVerticalWin() {
        const i = 0;
        return (
            (this.state.squares[i] && this.state.squares[i] === this.state.squares[i + 3] && this.state.squares[i + 3] === this.state.squares[i + 6]) ||
            (this.state.squares[i + 1] && this.state.squares[i + 1] === this.state.squares[i + 4] && this.state.squares[i + 4] === this.state.squares[i + 7]) ||
            (this.state.squares[i + 2] && this.state.squares[i + 2] === this.state.squares[i + 5] && this.state.squares[i + 5] === this.state.squares[i + 8])
        );
    }

    isDiagonalWin() {
        const i = 0;
        return (
            (this.state.squares[i] && this.state.squares[i] === this.state.squares[i + 4] && this.state.squares[i + 4] === this.state.squares[i + 8]) ||
            (this.state.squares[i + 2] && this.state.squares[i + 2] === this.state.squares[i + 4] && this.state.squares[i + 4] === this.state.squares[i + 6])
        );
    }

    clearGame() {
        this.setState({
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
        });
    }

    render() {
        const winner = this.state.nextPlayerX? 'O' : 'X';
        return (
            <div>
                <div className={this.determineWinner()? "alert alert-success text-center mb-3" : "hide"}><strong>Player {winner} won!!</strong></div>
                <div className={this.isGameDrawn()? "alert alert-info text-center mb-3" : "hide"}><strong>Game Drawn</strong></div>
                {this.createBoard()}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-3" onClick={() => this.clearGame()}>New Game</button>
                </div>
            </div>
        );
    }
}

export default Board