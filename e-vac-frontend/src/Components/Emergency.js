import React, { useEffect, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
const Emergency = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAmbulance = async () => {
      try {
        setData({ users: data.users, isFetching: true });
        const response = await axios.post("http://localhost/800/ambulance");
        setData({ ambulances: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ ambulances: data.ambulances, isFetching: false });
      }
    };
    fetchAmbulance();
  }, []);

  return (
    <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start active "
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Hospital Name</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start "
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>
  );
=======

const Emergency = () => {
  const [ambulance, setAmbulance] = useState([]);
  useEffect(() => {
    getAmbulanceList();
      }, []);

      const getAmbulanceList = () => {
        axios.get("http://localhost:5000/ambulance")
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

>>>>>>> faizan
};
export default Emergency;
