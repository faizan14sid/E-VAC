import { Modal,Form,Button,Card,ListGroup } from 'react-bootstrap';
import React from 'react';
import { useState , useEffect} from "react";
import axios from 'axios'
const Book = ( {list}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useEffect(() => {
    //   getAmbulanceList();
    //     }, []);
  
    //     const getAmbulanceList = () => {
    //       axios.post("http://localhost:8000/user/ambulance", {ambulance})
    //       .then((response)=> {
    //         setAmbulance(response.data)
    //         console.log(response.data)
    //       })
    //       .catch(error=> console.error(`Error: ${error}`));
    //     }
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
            
          
          <Card style={{ width: '18rem' }}> 
  <ListGroup variant="flush">
    <ListGroup.Item>Ambulance Number :  {list.ambulanceNumber}</ListGroup.Item>
    <ListGroup.Item>Hospital Name : {list.hospitalName} </ListGroup.Item>
    <ListGroup.Item>Driver Name : {list.driverName}</ListGroup.Item>
    <ListGroup.Item>Driver Phone Number : {list.driverNumber}</ListGroup.Item>
    <ListGroup.Item>Distance : {list.distance} km</ListGroup.Item>
    <ListGroup.Item>Price : Rs {list.price}</ListGroup.Item>
  </ListGroup>
</Card>

          </Modal.Body>
          <Modal.Footer>
          <Button variant="success">
    Confirm Booking
  </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancel 
            </Button>
          
          </Modal.Footer>
        </Modal>
      </div>

    )}
    
  
    
  
  export default Book;