import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './node_modules/dotenv/config.js';
// import userRoute from './route/user.route.js';
// import ambulanceRoute from './route/ambulances.route'
// import auth from  './middleware/auth';
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb://127.0.0.1/E-Vac'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected');
})



app.use('/api', userRoute);
// app.use('/api',ambulanceRoute);