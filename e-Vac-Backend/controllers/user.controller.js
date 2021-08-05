import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import '../node_modules/dotenv/config.js';
import UserModel from '../models/users.model.js';
import bcrypt from 'bcrypt';
import fast2sms from 'fast-two-sms';

// var  User = require("../models/user");
// const  SendOtp = require("sendotp");

// pass your msg91 otp creditials SendOtp
var Otp = 1234;
// send otp for sending otp to entered phone number and also pass message sender name like app name from your credintials
export const SENDOTP = async (req, res) => {
    const OTP = await Math.floor(1000 + Math.random() * 9000)
    Otp = OTP
    console.log(OTP, req.body)
    const response = await fast2sms.sendMessage({ authorization: process.env.API_KEY, message: `${OTP} otp for E-Vac`, numbers: [req.body.phoneNumber] })
    res.send(response)


    // sendOtp.send(req.body.phoneNumber, "Parmeshwar", (err, data) => {
    //     console.log(req.body.phoneNumber)
    //     if (err) return  res.json({ err });
    //     data.type == "success"
    //     ? res.json({ success:  true })
    //     : res.json({ success:  false });
    // });
}

// verify otp to verify entered otp matched with sentotp or not
export const VERIFYOTP = (req, res) => {
    console.log(req.body.otp, Otp)
    if (req.body.otp == Otp) {
        // if (data.type == "success") {
        let { phoneNumber } = req.body;
        UserModel.findOne({ phoneNumber }, (err, user) => {
            if (err) return res.json({ err });
            if (!user) {
                // user signup
                UserModel.create(req.body, (err, user) => {
                    if (err) return res.json({ err });
                    jwt.sign(
                        {
                            userId: user._id,
                            phoneNumber: user.phoneNumber
                        },
                        "thisissecret",
                        (err, signuptoken) => {
                            if (err) return res.json({ err });
                            res.json({
                                success: true,
                                signuptoken,
                                userId: user._id,
                                message: "registered successfully"
                            });
                        }
                    );
                });
            }
            if (user) {
                // user signin
                jwt.sign(
                    {
                        userId: user._id,
                        phoneNumber: user.phoneNumber
                    },
                    "thisissecret",
                    (err, logintoken) => {
                        if (err) return res.json({ err });
                        res.json({ logintoken, userId: user._id });
                    }
                );
            }
        });
        // }
        // if (data.type == "error") res.json({ success:  false, message:  data.message });
    } else {
        res.send({ message: "Wrong otp" })
    };
}