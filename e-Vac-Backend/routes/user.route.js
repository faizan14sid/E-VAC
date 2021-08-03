import path from 'path';
import express from 'express';
import multer from 'multer';
// import { signin, signup } from '../controllers/user.controller.js';
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

router.post('/login',(req, res)=>{
    const {name, phoneNumber} = req.body;
    
    if(!name || !phoneNumber) {
        return res.status(422).json({error: "please enter both name and phone no."});
    }
    UserModel.findOne({phoneNumber: phoneNumber})
    .then((oldUser)=>{
        if(oldUser) {
            return res.status(422).json({error: "phone number already exist"});
        }

        const user = new UserModel({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber
        });

        user
        .save()
        .then((doc)=>{
            res.status(201).json(user)

        }).catch((err)=>res.status(500).json({message: err.message}))
    }).catch(err=> {console.log(err);})
  });
  
// import User from '../models/users.model.js';
// import UserAddress from '../models/userAddress'

// router.post('/login',(req, res,next) => {
//     User.findOne({email:req.body.email})
//     .exec()
//     .then(user => {
//         if(user){
//             return res.status(500).json({
//                 message:'Email Already Exists'
//             })
//         }else{
//             bcrypt.hash(req.body.password,10,(err,hash) => {
//                 if(err){
//                     return res.status(500).json({
//                         error:"Something went wrong"
//                     });
//                 }else{
//                     const user = new User({
//                         _id : new mongoose.Types.ObjectId(),
//                         firstName:req.body.firstName,
//                         lastName:req.body.lastName,
//                         email:req.body.email,
//                         password:hash,
//                         createdAt:new Date().toISOString()
//                     });

//                     user.save()
//                     .then(doc => {
//                         res.status(201).json({
//                             message:'Account Created Successfully'
//                         });
//                     })
//                     .catch(err => {
//                         res.status(500).json({
//                             error:err
//                         });
//                     });

//                 }
//             });
//         }
//     });
// });


// router.post('/login', (req, res, next) => {
//     User.findOne({email: req.body.email})
//     .select('_id firstName lastName email password')
//     .exec()
//     .then(user => {
//         if(user){

//             bcrypt.compare(req.body.password, user.password, (err, result) => {
//                 if(err){
//                     return res.status(500).json({
//                         message: 'Login Failed'
//                     })
//                 }else{
//                     if(result){
//                         const payload = {
//                             userId: user._id,
//                             iat:  Math.floor(Date.now() / 1000) - 30,
//                             exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 24),
//                         }
//                         jwt.sign(payload, 'mysecretkey', (err, token) => {
//                             if(err){
//                                 return res.status(500).JSON({
//                                     message: 'Authentication Failed'
//                                 });
//                             }else{
//                                 res.status(200).json({
//                                     message: {
//                                         user: {
//                                             userId: user._id,
//                                             firstName: user.firstName,
//                                             lastName: user.lastName,
//                                             email: user.email
//                                         },
//                                         token: token
//                                     }
//                                 })
//                             }
//                         })
//                     }else{
//                         res.status(500).json({
//                             message: 'Incorrect Password'
//                         });
//                     }
//                 }
//             });

//         }else{
//             res.status(500).json({
//                 message: 'Email doesn\'t not exists'
//             });
//         }
//     })
//     .catch(error => {
//         res.status(500).json({
//             error: error
//         });
//     })


// });




// router.post('/new-address', (req, res, next) => {

//     UserAddress.findOne({"user": req.body.userId})
//     .exec()
//     .then(user => {

//         if(user){

//             UserAddress.findOneAndUpdate({"user": req.body.userId}, {
//                 $push: {
//                     "address": req.body.address
//                 }
//             }, {
//                 new: true
//             })
//             .then(doc => {
//                 res.status(201).json({
//                     message: doc
//                 });
//             });

//         }else{

//             const userAddress = new UserAddress({
//                 _id: new mongoose.Types.ObjectId(),
//                 user: req.body.userId,
//                 address: req.body.address
//             });

//             userAddress.save()
//             .then(doc => {
//                 res.status(201).json({
//                     message: doc
//                 });
//             })
//             .catch(error => {
//                 res.status(500).json({
//                     error: error
//                 });
//             })

//         }

//     });

// });

// router.get('/get-addresses/:userId', (req, res, next) => {

//     UserAddress.findOne({"user": req.params.userId})
//     .select('_id user address')
//     .exec()
//     .then(user => {
//         res.status(200).json({
//             message: user
//         })
//     })
//     .catch(error => {
//         res.status(500).json({
//             error: error
//         })
//     })

// });





// module.exports = router;


// const router = express.Router();
// const __dirname = path.resolve();


// const storage = multer.diskStorage({
//     destination:  function(req, file, cb) {
//         cb(null, "../uploads");
//     },
//     filename: function(req, file, cb) {
//         cb(null, shortid.generate() + "-" + file.originalname);
//     }
// });

// const fileFilter = (res, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//         res.status(400).send({message: "Invalid file type"})
//     }
// }

// const upload = multer({storage, fileFilter});

// router.post('/user/signin', signin);
// router.post('/user/signup', signup);

// ///removed uplode file



export default router;