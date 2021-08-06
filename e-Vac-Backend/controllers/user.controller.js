import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import '../node_modules/dotenv/config.js';
import UserModel from '../models/users.model.js';
import fast2sms from 'fast-two-sms';


// send otp for sending otp to entered phone number and also pass message sender name like app name from your credintials
export const SENDOTP = async (req, res) => {
    const OTP = await Math.floor(1000 + Math.random() * 9000)
    req.body.otp = OTP
    let phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber)
    UserModel.findOne({ phoneNumber }, (err, user) => {
        if (err) return res.send({ message: err.message });
        if (!user) {
            // user signup
            const newuser = new UserModel({
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                otp: req.body.otp
            });

            newuser
                .save()
                .then(async (doc) => {
                    const response = await fast2sms.sendMessage({ authorization: process.env.API_KEY, message: `${user.otp} otp for E-Vac`, numbers: [req.body.phoneNumber] })
                    return res.status(200).send(response)
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })

        }
        if (user) {
            UserModel.updateOne({ phoneNumber }, req.body)
                .then(async (doc) => {
                    if (!doc) { return res.status(404).end(); }
                    const response = await fast2sms.sendMessage({ authorization: process.env.API_KEY, message: `${req.body.otp} otp for E-Vac`, numbers: [req.body.phoneNumber] })
                    return res.status(200).send(response)
                }).catch((err) => {
                    res.send({ message: err.message })
                })
        }
    })

}

// verify otp to verify entered otp matched with sentotp or not
export const VERIFYOTP = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    UserModel.findOne({ phoneNumber }, (err, user) => {
        if (err) return res.json({ message: err.message });
        if (user) {
            if (user.otp == req.body.otp) {
                // user signin
                jwt.sign(
                    {
                        userId: user._id,
                        phoneNumber: user.phoneNumber
                    },
                    'mysecretkey',
                    (err, logintoken) => {
                        if (err) return res.json({ message: err.message });
                        process.env.mysecretkey = logintoken;
                        res.json({ logintoken, userId: user._id });
                    }
                );
            } else {
                res.send("Invalid Otp")
            }
        }
    })
}