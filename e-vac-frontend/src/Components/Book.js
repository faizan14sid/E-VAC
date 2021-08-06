import { Modal, Button, Card, ListGroup } from 'react-bootstrap';
import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Book = ({ list }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Book Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Ambulance</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Card style={{ width: '24rem' }}>
            <ListGroup variant="flush" style={{ fontFamily: "cursive" }}>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Ambulance Number</span> : {list.ambulanceNumber}</ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Hospital Name </span>: {list.hospitalName} </ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Driver Name</span> : {list.driverName}</ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Driver Phone Number</span> : {list.driverNumber}</ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>reviewRating</span> : {list.reviewRating}</ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Distance</span> : {list.distance} km</ListGroup.Item>
              <ListGroup.Item><span style={{ fontFamily: "sans-serif" }}>Price</span> : Rs {list.price}</ListGroup.Item>
            </ListGroup>
          </Card>

        </Modal.Body>
        <Modal.Footer>
          <Link to={{
            pathname: "/payment",
            state: {
              detail: list
            }
          }} >
            <Button variant="success">
              Confirm Booking
            </Button></Link>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
    </div>

  )
}




export default Book;