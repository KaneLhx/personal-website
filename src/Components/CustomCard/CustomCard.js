import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function ShowCard(props) {
    return (
        <div className="app_section">
            <Card border="primary">
                <Card.Header className="text-center" as="h3">{props.elements.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.elements.title}</Card.Title>
                    <Card.Text>
                        {props.elements.body}
                    </Card.Text>
                    <ShowImage images={props.elements.images} isReducedWidth={props.elements.isReducedWidth}/>       
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}


function ShowImage(props) {
    if (props.images) {
        return (
            <div className="d-flex justify-content-center">
                <Carousel className={(props.isReducedWidth?"reduced_width": "normal_width")}>
                    {props.images.map((image, index)  => (
                        <Carousel.Item key={index} interval={2000}>
                        <img
                        className="d-block w-100 app_image text-center"
                        src={image}
                        alt="{image}"
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }
    return null;
}


class CustomCard extends Component {
    render() {
        return (            
            <ShowCard elements={this.props} />
        );
    }
}

export default CustomCard
