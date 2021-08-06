import express from 'express';
<<<<<<< HEAD
import  Payment from '../controllers/Payment.controller.js';
=======
import Payment from '../controllers/Payment.controller.js';
>>>>>>> main
// import router from './user.route';
const app = express();
app.use(express.json());
const router = express.Router();
<<<<<<< HEAD
import auth from '../middleware/auth.js';


router.post('/payment',auth,Payment)
=======



router.post('/payment', Payment)
>>>>>>> main

export default router;