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

export const ambulance = async (req, res) => {
  const ambulance = new AmbulanceModel({
    ambulanceNumber: req.body.ambulanceNumber,
    hospitalName: req.body.hospitalName,
    price: req.body.price,
    productImage: req.body.productImage,
    reviewRating: req.body.reviewRating,
    reviewCount: req.body.reviewCount,
    distance: req.body.distance,
    online: req.body.online,
    location:req.body.location
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
  AmbulanceModel.find({online:true,available:true})
    .select(
      "ambulanceNumber hospitalName  price productImage reviewImage reviewRating reviewCount  available online distance location"
    )
    .exec()
    .then((data) => { 

      // db.test.find({ loc:{ $near:{ $geometry: {type: "Point" , coordinates:[77.6974,12.9591] }, $maxDistance:10000 }}})
// { "_id" : "madiwala", "type" : "Point", "loc" : [ 77.6174, 12.9226 ] }
      var l = []
      for (var i = 0; i < data.length; i++) {
        // const dis = data[i].test.find({ loc:{ $near:{ $geometry: {type: "Point" , coordinates:[77.6974,12.9591] }, $maxDistance:10000 }}})
        // console.log(dis)
        if (data[i].distance <=200){
          l.push(data[i])
        }
      }
      l.length>0 ? res.send(l) : res.send({message:"No Ambulance available"})
    })
    .catch((er) => {
      console.log("YEEEE");
      res.status(500).json({
        error: er,
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
