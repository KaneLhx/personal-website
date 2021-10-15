import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../Assets/Images/profile.jpg';
import Greenlight from '../../Assets/Images/greenlight.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserTie, faPhone } from '@fortawesome/fontawesome-free-solid'
import './BusinessCard.css';

class BusinessCard extends Component {

    componentDidMount(){
        document.body.style.backgroundImage = `url(${Greenlight})`;
        document.body.style.backgroundSize = "cover";
    }
    
    componentWillUnmount(){
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null;
    }

    render() {
        return (
            <Container fluid className="card_container">
                <div className="d-flex align-items-center justify-content-center card_info">
                    <Card className="business_card">
                        <Card.Header className="text-center" as="h3">
                            <a href="https://www.greenlightinnovation.com/" id="gi_link">Greenlight Innovation Corp</a>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={4} className="d-flex align-items-center image_container">
                                    <Image src={Profile} alt="No profile" className="profile" roundedCircle />
                                </Col>
                                <Col sm={8} className="d-flex align-items-center profile_info">
                                    <ul>
                                        <li><h4>Kane Lo Hog Tian</h4></li>
                                        <li><FontAwesomeIcon icon={faUserTie} />Software Developer</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto: kane.klht@gmail.com">kane.klht@gmail.com</a></li>
                                        <li><FontAwesomeIcon icon={faPhone} />6043384873</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>   
        )
    }
}

export default BusinessCard