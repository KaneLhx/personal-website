import React, {Component} from 'react';
import Square from '../../Components/Square/Square.js';
import './Board.css';


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
            lineWon: Array(3).fill(null) // to save the line won
        }
    }

    onClickBoard(value) {
        const squares = this.state.squares.slice(); // copy the array list using slice for immutability
        if (this.determineWinner().length > 0 || this.isGameDrawn()) {
            return;
        }
        squares[value] = this.nextPlayer();
        this.setState(
            {
                squares: squares, // set the state of all the squares
                nextPlayerX: !this.state.nextPlayerX, // set it to the next player
            }
        );
    }

    nextPlayer() {
        return this.state.nextPlayerX? 'X' : 'O';
    }

    showSquare(value, addedClass) {
        return <Square value={this.state.squares[value]} addedClass={addedClass} key={value} onClick={() => this.onClickBoard(value)} />
    }

    createBoard(winList) {
        const NUM = 3;
        let rowIndex = 0;
        let board = [];
        for (let i=0; i<NUM; i++) {
            let rows = [];
            for (let j=rowIndex; j<rowIndex+NUM; j++) {
                if (winList.indexOf(j) !== -1) {
                    rows.push(this.showSquare(j, "winSquare"));
                } else {
                    rows.push(this.showSquare(j, "square"));
                }
            }
            board.push(<div className="board" key={i}>{rows}</div>);
            rowIndex += 3;
        }

        return board;
    }

    determineWinner() {
        if (this.isHorizontalWin()) {
            return this.getHorizontalWinLine();
        } else if (this.isVerticalWin()) {
            return this.getVeticalWinLine();
        } else if (this.isDiagonalWin()) {
            return this.getDiagonalWinLine();
        }

        return [];
    }

    isGameDrawn() {
        return !this.state.squares.includes(null);
    }
    
    isHorizontalWin() {
        return (this.isFirstRowWin() || this.isSecondRowWin() || this.isThirdRowWin());
    }

    getHorizontalWinLine() {
        if (this.isFirstRowWin()) {
            return [0, 1, 2];
        } else if (this.isSecondRowWin()) {
            return [3, 4, 5];
        }
        
        return [6, 7, 8];
    }

    isVerticalWin() {
        return (this.isFirstColWin() || this.isSecondColWin() || this.isThirdColWin());
    }

    getVeticalWinLine() {
        if (this.isFirstColWin()) {
            return [0, 3, 6];
        } else if (this.isSecondColWin()) {
            return [1, 4, 7];
        }

        return [2, 5, 8];      
    }

    isDiagonalWin() {
        return (this.isLeftDiagonalWin() || this.isRightDiagonalWin());
    }

    getDiagonalWinLine() {
        if (this.isLeftDiagonalWin()) {
            return [0, 4, 8];
        } 

        return [2, 4, 6];

    }

    isFirstRowWin() {
        return (this.state.squares[0] && this.state.squares[0] === this.state.squares[1] && this.state.squares[1] === this.state.squares[2]);
    }

    isSecondRowWin() {
        return (this.state.squares[3]  && this.state.squares[3] === this.state.squares[4] && this.state.squares[4] === this.state.squares[5]);
    }

    isThirdRowWin() {
        return (this.state.squares[6] && this.state.squares[6] === this.state.squares[7] && this.state.squares[7] === this.state.squares[8]);
    }

    isFirstColWin() {
        return (this.state.squares[0] && this.state.squares[0] === this.state.squares[3] && this.state.squares[3] === this.state.squares[6]);
    }

    isSecondColWin() {
        return (this.state.squares[1] && this.state.squares[1] === this.state.squares[4] && this.state.squares[4] === this.state.squares[7]);
    }

    isThirdColWin() {
        return (this.state.squares[2] && this.state.squares[2] === this.state.squares[5] && this.state.squares[5] === this.state.squares[8]);
    }

    isLeftDiagonalWin() {
        return (this.state.squares[0] && this.state.squares[0] === this.state.squares[4] && this.state.squares[4] === this.state.squares[8]);
    }

    isRightDiagonalWin() {
        console.log.apply((this.state.squares[2] && this.state.squares[2] === this.state.squares[4] && this.state.squares[4] === this.state.squares[6]))
        return (this.state.squares[2] && this.state.squares[2] === this.state.squares[4] && this.state.squares[4] === this.state.squares[6]);
    }


    clearGame() {
        this.setState({
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
        });
    }

    render() {
        const winner = this.state.nextPlayerX? 'O' : 'X';
        const winList = this.determineWinner();
        const isGameWon = winList.length > 0; // the list is greater than 0 if we have a winner
        return (
            <div className="gameContainer">
                <div className={!isGameWon && !this.isGameDrawn()? "alert alert-info text-center mb-3" : "hide"}><strong>Next Player: </strong>{this.nextPlayer()}</div>
                <div className={isGameWon? "alert alert-success text-center mb-3" : "hide"}><strong>Player {winner} won!!</strong></div>
                <div className={this.isGameDrawn() && !isGameWon? "alert alert-warning text-center mb-3" : "hide"}><strong>Game Drawn</strong></div>
                {this.createBoard(winList)}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-3" onClick={() => this.clearGame()}>New Game</button>
                </div>
            </div>
        );
    }
}

export default Board