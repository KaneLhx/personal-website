import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Board from '../../Components/Board/Board.js';
import './TicTacToe.css';

class TicTacToe extends Component {
    render() {
        return(
            <Container fluid className="d-flex align-items-center justify-content-center game-board">
                <div>
                    <Board />
                </div>
            </Container>
        );
    }
}

export default TicTacToe



