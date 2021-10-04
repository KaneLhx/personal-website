import React, {Component} from 'react';
import Bowen_island from '../../Assets/Images/bowen-island.jpg';
import GI from '../../Assets/Images/GI.jpg';
import Mauritius  from '../../Assets/Images/mauritius.png';
import AndroidConnection from '../../Assets/Images/android_app_connection.jpg';
import AndroidGraph from '../../Assets/Images/android_app_graph.jpg';
import AndroidCursor from '../../Assets/Images/android_app_cursor.jpg';
import AndroidCatch from '../../Assets/Images/android_app_key_catch.jpg';
import AndroidNight from '../../Assets/Images/android_app_key_nightversion.jpg';
import AndroidKey from '../../Assets/Images/android_app_key.jpg';
import HangmanGame from '../../Assets/Images/hangman_game.png';
import HangmanGame1 from '../../Assets/Images/hangman_game1.png';
import HangmanGameCompleted from '../../Assets/Images/complete_hangman_game.png';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Home.css';


function AboutDesc(){
    return (
        <Container>
            <Card border="primary">
                <Card.Header className="text-center" as="h3">Kane Lo Hog Tian</Card.Header>
                <Card.Body>
                    <Card.Title>Introduction About Me</Card.Title>
                    <Card.Text>
                        My name is Kane Lo Hog Tian. This website has been developed to show some of my skills and experience.
                        I have 8 months Co-op experience in Greenlight Innovation as Information System Developer from September 2020 to May 2021 and in Kongsberg Mesotech as Software Engineer from January 2019 to August 2019.
                        I continue part time job as Software Developer at Greenlight and I am now working as full time developer at that company.
                        I also worked as a User Interface Research and Web Tester as part time during my study  at Simon Fraser University.
                        I finished my undergraduate study with a CGPA of 3.88 and I have received the President's Honour Roll and Dean's Honour Roll.
                        I am passionate in soccer, software and web development and volunteering.
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="primary">About me</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}


function ShowApplicationDeveloped(props) {
    return (
        <div className="app_section">
            <Card border="primary">
                <Card.Header className="text-center" as="h3">{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <ShowImage images={props.images} isReducedWidth={props.isReducedWidth}/>       
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


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100 home_image"
                        src={GI}
                        alt="GI"
                        />
                        <Carousel.Caption>
                            <h3>Software Developer At Greenlight Innovation</h3>
                            <p>SFU 2021 Graduate</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100 home_image"
                        src={Bowen_island}
                        alt="Bowen Island"
                        />
                        <Carousel.Caption>
                            <h3>An Amazing Lake From Bowen Island</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100 home_image"
                        src={Mauritius}
                        alt="Mauritius"
                        />
                        <Carousel.Caption>
                            <h3>A Splendid Lagoon From My Paradise Island</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
                <h1 className="text-center">Hello everyone and welcome To This React App</h1>
                <br/>
                <AboutDesc />
                <br/>
                <div className="applications_developed">
                    <Container>
                        <br/>
                        <h1 className="text-center header" >Applications Developed</h1>
                        <br/>
                        <ShowApplicationDeveloped header="Greenlight Innovation Corp" title="Greenlight Portal and Part Catalog Apps"
                            body="I am currently working on Portal which is an internal web app at Greenlight Innovation Corp located at Burnaby. I am working with a small group of developers
                            to implement features to improve the Supply Chain process. As portal grows, many different departments have started to be interested in implementing their own features on Portal.<br><br>
                            One of those departments are Payroll and Accounting which requested to migrate from Excel based timesheet to Web app timesheet. My team and I underwent regular scrum meeting and iterations to
                            develop the timesheet app on Portal. As from March 2021, employees have started to use our timesheet app to record their working hours and payroll uses the web app to pay employees.
                            Portal is developed in Django, Jquery, HTML, Bootstrap and CSS, using Postgresql database<br><br>
                            While working as part time, I also learned C# and Angular as my team has taken the part catalog app which helps engineers to record and view parts information. I am now the main developer of the app." 
                        />
                        <ShowApplicationDeveloped header="Kongsberg Mesotech Co-op" title="Android Remote Application For Sonar Systems"
                            body=" I developed an android tablet application and a desktop application using Qt framework and C++.
                            The android application is developed to replace the physical remote control which is used to control the sonar systems developed by the company. 
                            The sonar systems are connected to the desktop computer and will communicate to the desktop application.
                            The android application and desktop application can act as a server and a client which can connect to each other by bluetooth or ethernet option, giving the user different connection options.
                            The remote control application not only has a keypad but can also display sensor values received from the sonar systems as well as display a graph showing the patterns in the temperature and depth sensor values against time."
                            images={[AndroidConnection, AndroidKey, AndroidNight, AndroidCursor, AndroidGraph, AndroidCatch]} isReducedWidth="True"
                        />
                        <ShowApplicationDeveloped header="SFU Class Project" title="Online Hangman Game In Java"
                            body=" I developed an android tablet application and a desktop application using Qt framework and C++.
                            The android application is developed to replace the physical remote control which is used to control the sonar systems developed by the company. 
                            The sonar systems are connected to the desktop computer and will communicate to the desktop application.
                            The android application and desktop application can act as a server and a client which can connect to each other by bluetooth or ethernet option, giving the user different connection options.
                            The remote control application not only has a keypad but can also display sensor values received from the sonar systems as well as display a graph showing the patterns in the temperature and depth sensor values against time."
                            images={[HangmanGame, HangmanGame1, HangmanGameCompleted]}
                        />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home
