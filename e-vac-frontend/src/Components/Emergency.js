import React, { useEffect, useState } from "react";
import axios from "axios";

import Home from "./Home";

const Emergency = () => {
  const [ambulance, setAmbulance] = useState([]);
  useEffect(() => {
    getAmbulanceList();
      }, []);
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: "", lng: ""}
});

const onSuccess = (location) => {
    setLocation({
        loaded: true,
        coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        },
    });

};
const onError = error => {
    setLocation({
        loaded: true,
        error,
    });
};




useEffect(()=>{
    if(!('geolocation' in navigator)) {
        onError({
            code: 0,
            message: "GeoLocation not supported"
        });
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError)

    },[])

    useEffect(()=>{
      if(location.loaded && location.coordinates){
      getAmbulanceList();
    } 

    },[location])



      const getAmbulanceList = () => {
        axios.post("http://localhost:8000/user/ambulance", {ambulance})

        axios.post("http://localhost:8000/user/ambulance",{location})
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
            <small>Rs: {list.price}</small>
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