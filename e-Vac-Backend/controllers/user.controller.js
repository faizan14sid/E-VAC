import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import '../node_modules/dotenv/config.js';
import UserModel from '../models/users.model.js';
import bcrypt from 'bcrypt';

// const secret = process.env.secret;

// export const signin = async(req, res) => {
//     const {email, password} = req.body;

//     try {
//         const oldUser = await UserModel.findOne({ email });
//         if(!oldUser) {
//             return res.send({message: "User doesn't exists"});

//         } else {
//             const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
//             if(!isPasswordCorrect) {
//                 return res.send({message: 'Invalid Credentials'});
            
//             } else {
//                 const token = jwt.sign({ email: oldUser.email, id: oldUser._id}, secret, { expiresIn: '24h'});
//                 res.send({oldUser, token}) 
//             }

//         }
//     } catch (error) {
//         res.send({message: error.message});        
//     }
// };

// export const signup = async(req, res) => {
//     const {name, username, email, password} = req.body;
//     const picture = req.file.filename;
    
//     try {
//         if(!name || !username || !email || !password) {
//             res.send({message: "All fields are required"})
//         } else {
//         const oldUser = await UserModel.findOne({email});

//         if(oldUser) {
//             res.send({message: "User already registered"});
        
//         } else {
//             const hashedPassword = await bcrypt.hash(password, 12);

//                 const result = await UserModel.create({email, password: hashedPassword, username, name, picture});
//                 const token = jwt.sign({ email: result.email, id: result._id }, secret, {expiresIn: "24h"});
//                 res.send({token, result});
            
//         }
//         }
//     } catch (error) {
//         res.send({message: error.message});
//     }
// }