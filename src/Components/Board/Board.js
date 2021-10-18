import React, {Component} from 'react';
import Square from '../../Components/Square/Square.js';
import {ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Board.css';


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
        }
    }

    chooseNextPosition() {
        const nextPlayer = this.nextPlayer();
        const previousPlayer = this.state.nextPlayerX? 'O': 'X';
        const squares = this.state.squares.slice();
        // get the list of all positions which is still empty
        let squaresNullIndices = squares.reduce(function(arr, el, i) {
            if (el === null)
                arr.push(i);
            return arr;
        }, []);
        
        if(!this.setStateBasedOnWinningPossibilities(squaresNullIndices, nextPlayer, nextPlayer)) {
            // if there is no way to win for the next player, check if there is any winning way for the previous player
            if (!this.setStateBasedOnWinningPossibilities(squaresNullIndices, previousPlayer, nextPlayer)) {
                // if there is no winning way, randomly choose a position from the list of null indices
                // squaresNullIndices[i] gives the position in the squares
                let i = Math.floor(Math.random() * (squaresNullIndices.length));
                return this.setBoardState(squares, squaresNullIndices[i], nextPlayer);
            }
        }
       
    }
    
    setStateBasedOnWinningPossibilities(squaresNullIndices, player, nextPlayer) {
        let squares = this.state.squares.slice();
        const squareList = squares.slice();
        for(let i=0; i<squareList.length;i++) {     
            squares[squaresNullIndices[i]] = player;
            // check if there is a winner
            if(this.determineWinner(squares).length > 0) {
                // change the board state
                this.setBoardState(squares, squaresNullIndices[i], nextPlayer);
                return true;
            }
            squares = squareList.slice();
        }

        return false;
    }

    onClickBoard(value) {
        const squares = this.state.squares.slice(); // copy the array list using slice for immutability
        if (this.determineWinner(this.state.squares).length > 0 || this.isGameDrawn()) {
            return;
        }
        squares[value] = this.nextPlayer();
        this.setState(
            {
                squares: squares, // set the state of all the squares
                nextPlayerX: !this.state.nextPlayerX, // set it to the next player
            },   
            ()  =>   { // choose next position only after changing state, there is still no winner and the player chooses multiplayer
                        if(this.determineWinner(this.state.squares).length === 0 && this.props.player_option !== "multiplayer") {
                            this.chooseNextPosition();
                        }
                    });
    }

    setBoardState(squares, value, nextPlayer) {
        squares[value] = nextPlayer;
        this.setState(
            {
                squares: squares, // set the state of all the squares
                nextPlayerX: !this.state.nextPlayerX // set it to the next player
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

    determineWinner(squares) {
        if (this.isHorizontalWin(squares)) {
            return this.getHorizontalWinLine(squares);
        } else if (this.isVerticalWin(squares)) {
            return this.getVeticalWinLine(squares);
        } else if (this.isDiagonalWin(squares)) {
            return this.getDiagonalWinLine(squares);
        }

        return [];
    }

    isGameDrawn() {
        return !this.state.squares.includes(null);
    }
    
    isHorizontalWin(squares) {
        return (this.isFirstRowWin(squares) || this.isSecondRowWin(squares) || this.isThirdRowWin(squares));
    }

    getHorizontalWinLine(squares) {
        if (this.isFirstRowWin(squares)) {
            return [0, 1, 2];
        } else if (this.isSecondRowWin(squares)) {
            return [3, 4, 5];
        }
        
        return [6, 7, 8];
    }

    isVerticalWin(squares) {
        return (this.isFirstColWin(squares) || this.isSecondColWin(squares) || this.isThirdColWin(squares));
    }

    getVeticalWinLine(squares) {
        if (this.isFirstColWin(squares)) {
            return [0, 3, 6];
        } else if (this.isSecondColWin(squares)) {
            return [1, 4, 7];
        }

        return [2, 5, 8];      
    }

    isDiagonalWin(squares) {
        return (this.isLeftDiagonalWin(squares) || this.isRightDiagonalWin(squares));
    }

    getDiagonalWinLine(squares) {
        if (this.isLeftDiagonalWin(squares)) {
            return [0, 4, 8];
        } 

        return [2, 4, 6];

    }

    isFirstRowWin(squares) {
        return (squares[0] && squares[0] === squares[1] && squares[1] === squares[2]);
    }

    isSecondRowWin(squares) {
        return (squares[3]  && squares[3] === squares[4] && squares[4] === squares[5]);
    }

    isThirdRowWin(squares) {
        return (squares[6] && squares[6] === squares[7] && squares[7] === squares[8]);
    }

    isFirstColWin(squares) {
        return (squares[0] && squares[0] === squares[3] && squares[3] === squares[6]);
    }

    isSecondColWin(squares) {
        return (squares[1] && squares[1] === squares[4] && squares[4] === squares[7]);
    }

    isThirdColWin(squares) {
        return (squares[2] && squares[2] === squares[5] && squares[5] === squares[8]);
    }

    isLeftDiagonalWin(squares) {
        return (squares[0] && squares[0] === squares[4] && squares[4] === squares[8]);
    }

    isRightDiagonalWin(squares) {
        return (squares[2] && squares[2] === squares[4] && squares[4] === squares[6]);
    }

    clearGame() {
        this.setState({
            squares: Array(9).fill(null), // to save the state of the game
            nextPlayerX: true, // default player is X
        });
    }

    render() {
        // if next player is X, then the current player who wins will be O
        const winner = this.state.nextPlayerX? 'O' : 'X';
        const winList = this.determineWinner(this.state.squares);
        const isGameWon = winList.length > 0; // the list is greater than 0 if we have a winner   
        const gameMode = this.props.player_option === "multiplayer"? "MULTIPLAYER MODE" : "SINGLE PLAYER MODE";    

        return (
            <div className="gameContainer">
                <h4 className="text-center gameMode m-3">{gameMode}</h4>
                <div className={!isGameWon && !this.isGameDrawn()? "alert alert-info text-center mb-3" : "hide"}><strong>Next Player: </strong>{this.nextPlayer()}</div>
                <div className={isGameWon? "alert alert-success text-center mb-3" : "hide"}><strong>Player {winner} won!!</strong></div>
                <div className={this.isGameDrawn() && !isGameWon? "alert alert-warning text-center mb-3" : "hide"}><strong>Game Drawn</strong></div>
                {this.createBoard(winList)}
                <ButtonToolbar className="d-flex justify-content-center">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button className="btn btn-primary mt-3" onClick={() => this.clearGame()}>New Game</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Link to="/tic-tac-toe" type="button" className="btn btn-success mt-3">Game Options</Link>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Board;