import express from 'express';
import { Payment } from '.././controllers/Payment.controller.js';
// import router from './user.route';
const app = express();
app.use(express.json());
const router = express.Router();



app.post('/payment',Payment)


