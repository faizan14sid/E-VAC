import React from "react";
import GoogleMap from "./GoogleMap";
import { Card, Carousel, Button } from "react-bootstrap";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "70vw",
            height: "70vh",
          }}
        >
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-50"
                src="https://www.fleetrobo.com/blog/wp-content/uploads/2020/05/save-maximum-lives-with-intelligent-ambulance-fleet-management-system.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-50"
                src="https://adda.io/blog/wp-content/uploads/2020/04/Emergency-Contact-1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-50"
                src="https://thumbs.dreamstime.com/z/all-ambulance-car-via-mobile-phone-emergency-call-ambulance-car-hands-dialing-number-ambulance-service-operator-hospital-building-119941641.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <GoogleMap />

      <Footer />
    </div>
  );
};

export default Home;
