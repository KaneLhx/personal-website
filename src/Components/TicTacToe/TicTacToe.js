import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Board from '../../Components/Board/Board.js';
import { withRouter } from "react-router";

import './TicTacToe.css';


class TicTacToe extends Component {
    render() {
        const playerOption = this.props.match.params.player_option;
        return(
            <div>
                <h3 className="header text-center">Welcome to my tic-tac-toe game</h3>
                <Container fluid className="d-flex justify-content-center game-board">
                    <div>
                        <Board player_option={playerOption}/>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withRouter(TicTacToe); // use withRouter to get the player option



