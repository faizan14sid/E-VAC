import React from "react";
import GoogleMap from "./GoogleMap";
import slide1 from "../images/img1.jpg";
import slide3 from "../images/img2.jpg";
import slide2 from "../images/Mobile.png";
import { Card, Carousel, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Paper from '@material-ui/core/Paper'
import { Link } from "react-router-dom";

const Home = () => {



  return (
    <div style={{ backgroundColor: "white" }}>
      <Row>

        <Col sm={3} xs={12} >
          <Paper elevation={5}>
            <Card >
              <Card.Img
                variant="top"
                src="https://www.codemade.io/wp-content/uploads/2019/09/the-best-taxi-booking-app-of-nigeria-carxie-clone-156817865984kng.png"
              />
              <Card.Body>
                <Card.Title>Book your Ambulance now</Card.Title>
                <Card.Text>
                  In case of emergency click on emergency button
                </Card.Text>


                <Link to="/user/ambulance">
                  <Button variant="danger">Emergency</Button>
                </Link>

              </Card.Body>
            </Card>
          </Paper>
        </Col>

        <Col sm={3} xs={10} style={{ margin: "auto" }}><h1 style={{ fontFamily: "serif", fontWeight: 500 }}>Hi, Welcome to E-VAC</h1>
          <br />
          <br />
          <br />
          <br />
          <h4 style={{ fontFamily: "cursive" }}>Now book an ambulance by just one click</h4>
        </Col>
        <Col sm={6} xs={12}>

          <Carousel variant="dark">
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={slide3}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={slide1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

        </Col>
      </Row >
      <Row>
        <GoogleMap />
      </Row>
    </div>
  );
};

export default Home;