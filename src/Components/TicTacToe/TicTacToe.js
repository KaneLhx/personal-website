import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Board from '../../Components/Board/Board.js';
import './TicTacToe.css';

class TicTacToe extends Component {
    render() {
        return(
            <div>
                <h3 className="header text-center">Welcome to my tic-tac-toe game</h3>
                <Container fluid className="d-flex justify-content-center game-board">
                    <div>
                        <Board />
                    </div>
                </Container>
            </div>
        );
    }
}

export default TicTacToe



