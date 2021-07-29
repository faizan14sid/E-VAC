import React from "react";
import GoogleMap from "./GoogleMap";
import slide1 from "../images/slide-1.jpg";
import slide2 from "../images/Mobile.png";
import { Card, Carousel, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Row>
        
        <Col sm={3}>
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
               
                  
                  <Link to="/emergency">
                    <Button variant="danger">Emergency</Button>
                  </Link>
                
              </Card.Body>
            </Card>
         
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={6}>
          
            <Carousel variant="dark">
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src="https://adda.io/blog/wp-content/uploads/2020/04/Emergency-Contact-1.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
         
        </Col>
      </Row>

      <GoogleMap />
    </>
  );
};

export default Home;
