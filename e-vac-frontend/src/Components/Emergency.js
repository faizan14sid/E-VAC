import React, { useEffect, useState } from "react";
import axios from "axios";


const Emergency = () => {
  const [ambulance, setAmbulance] = useState([]);
  const [location,setLocation] = useState([]);
  useEffect(() => {
    getAmbulanceList();
      }, []);

      const getAmbulanceList = () => {
        axios.post("http://localhost:8000/user/ambulance", {ambulance})
        .then((response)=> {
          setAmbulance(response.data)
          console.log(response.data)
        })
        .catch(error=> console.error(`Error: ${error}`));
      }
      return( <div>{ambulance.map((list,index)=>{
        return( <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start "
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Hospital Name : {list.hospitalName}</h5>
            <small>{list.price}</small>
          </div>
          <p className="mb-1">
            Ambulance No.  : { list.ambulanceNumber}
          </p>
          <small>Distance :{list.distance} km</small>
        </a>
       
        
        </div>
        );
         
      })}</div>)

};
export default Emergency;
