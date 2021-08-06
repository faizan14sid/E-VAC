import path from 'path';
import express from 'express';
import multer from 'multer';
import { SENDOTP, VERIFYOTP } from '../controllers/user.controller.js';
import shortid from 'shortid';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import UserModel from '../models/users.model.js';
import '../node_modules/dotenv/config.js';

// import authenticate from '../middleware/authenticate';
const router = express.Router();
const app = express();
app.use(express.json());

router.get("/logout", (req, res) => {
    console.log("my logout page")
    res.clearCookie('jwtoken', { path: "/" })
    res.status(200).send("user logout")
})

// send otp
router.post("/login/sendotp", SENDOTP);
// verify otp
router.post("/login/verifyotp", VERIFYOTP);


// router.post('/login', (req, res) => {
//     const { name, phoneNumber } = req.body;

//     if (!name || !phoneNumber) {
//         return res.status(422).json({ error: "please enter both name and phone no." });
//     }
//     UserModel.findOne({ phoneNumber: phoneNumber })
//         .then((oldUser) => {
//             if (oldUser) {

//                 return res.status(422).json({ error: "phone number already exist" });
//             }

//             const user = new UserModel({
//                 name: req.body.name,
//                 phoneNumber: req.body.phoneNumber
//             });

//             user
//                 .save()
//                 .then((doc) => {
//                     res.status(201).json(user)

//                 }).catch((err) => res.status(500).json({ message: err.message }))
//         }).catch(err => { console.log(err); })
// });


export default router;