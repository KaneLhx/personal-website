import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './CustomNavbar.css';
import {LinkContainer} from 'react-router-bootstrap';


class CustomNavbar extends Component {
    render() {
      return (
        <Navbar sticky="top" bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                  <Navbar.Brand><img className="icon" src={process.env.PUBLIC_URL + '/favicon.png'} alt="No pic"/></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/business-card">About Me</Nav.Link> */}
                    <LinkContainer to="/business-card">
                      <Nav.Link>My Business Card</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tic-tac-toe">
                      <Nav.Link>TicTacToe</Nav.Link>
                    </LinkContainer>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Game</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      )
    }
}

export default CustomNavbar;

    
