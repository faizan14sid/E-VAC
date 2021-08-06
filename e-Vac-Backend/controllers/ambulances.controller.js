import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import "../node_modules/dotenv/config.js";
import AmbulanceModel from "../models/ambulances.model.js";
import bcrypt from "bcrypt";
// import bodyParser from 'body-parser';
const app = express();
app.use(express.json());
// app.use(bodyParser.json())

export const newambulance = async (req, res) => {
  const ambulance = new AmbulanceModel({
    ambulanceNumber: req.body.ambulanceNumber,
    hospitalName: req.body.hospitalName,
    driverName: req.body.driverName,
    driverPhone: req.body.driverPhone,
    price: req.body.price,
    productImage: req.body.productImage,
    reviewRating: req.body.reviewRating,
    reviewCount: req.body.reviewCount,
    driverName: req.body.driverName,
    driverNumber: req.body.driverNumber,
    distance: req.body.distance,
    online: req.body.online,
    location: req.body.location,
  });
  ambulance
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Created ambulance data",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};



// User.find({region: "NA",sector:"Some Sector"}, function(err, user)
export const availableambulance = async (req, res) => {
  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }
  const location = req.body.location.coordinates;
  console.log(location)
  AmbulanceModel.find({ online: true, available: true })
    .select(
      "ambulanceNumber hospitalName  price productImage reviewImage reviewRating reviewCount  available online distance location driverName driverNumber"
    )
    .exec()
    .then((data) => {
      const loc1 = [location.lat, location.lng];
      var l = [];
      for (var i = 0; i < data.length; i++) {
        const loc2 = data[i].location;
        const dis = calcCrow(loc1[0], loc1[1], loc2[0], loc2[1]);
        if (dis <= 30) {
          data[i].distance = Math.floor(10 * dis) / 10;
          data[i].price = Math.floor(10 * data[i].price * dis) / 10;
          l.push(data[i]);
        }
      }
      l.length > 0
        ? res.send(l)
        : res.send({ message: "No Ambulance available" });
    })
    .catch((er) => {
      res.status(500).json({
        message: er.message,
      });
    });
  // .then(ambulance => {
  //     res.status(200).json({
  //         message: ambulance
  //     });
  // })
  // .catch(er => {
  //     res.status(500).json({
  //         error:er
  //     });
  // })
};