import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './PlayerOption.css';

class PlayerOption extends Component {
    render() {
        return (
            <Container fluid className="d-flex justify-content-center text-center gameOption">
                <Card className="gameCard">
                    <Card.Header as="h3">Tic Tac Toe Game Option</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">Please select from the following options to start the game </Card.Title>
                        <ButtonGroup vertical>
                            <Link type="button" className="btn btn-primary mt-2" to="/tic-tac-toe/single-player">Single Player</Link>
                            <Link type="button" className="btn btn-success mt-2" to="/tic-tac-toe/multiplayer">Multiplayer</Link>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default PlayerOption;