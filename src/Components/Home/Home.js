import React, {Component} from 'react';
import bowen_island from '../../Assets/Images/bowen-island.jpg';
import mauritius  from '../../Assets/Images/mauritius.png';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 image"
                    src={mauritius}
                    alt="Mauritius"
                    />
                    <Carousel.Caption>
                        <h3>Software Developer At Greenlight Innovation</h3>
                        <p>SFU 2021 Graduate</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 image"
                    src={bowen_island}
                    alt="Bowen Island"
                    />
                    <Carousel.Caption>
                        <h3>An amazing lake from Bowen island</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Home
