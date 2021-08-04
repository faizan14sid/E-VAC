
import { Modal,Form,Button,Card,ListGroup } from 'react-bootstrap';

import { useState } from "react";

function Book() {
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
           <div>Hiiii</div>
           <div>Hiiii</div>
           <div>Hiiii</div>
           <div>Hiiii</div>
           <div>Hiiii</div>
           <div>Hiiii</div>
       </div>
    )}
    
    //       <>
//         <Button variant="primary" onClick={handleShow}>
//           Book
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Book Ambulance</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
            
          
//           <Card style={{ width: '18rem' }}> 
//   <ListGroup variant="flush">
//     <ListGroup.Item>Ambulance Number :</ListGroup.Item>
//     <ListGroup.Item>Hospital Name :</ListGroup.Item>
//     <ListGroup.Item>Driver Name :</ListGroup.Item>
//     <ListGroup.Item>Driver Phone Number :</ListGroup.Item>
//     <ListGroup.Item>Distance :</ListGroup.Item>
//     <ListGroup.Item>Price :</ListGroup.Item>
//   </ListGroup>
// </Card>
// <Form>
//   <Button variant="primary" type="submit">
//     Book
//   </Button>
// </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
          
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
    
  
  export default Book;