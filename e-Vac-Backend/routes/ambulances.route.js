import express from 'express';
import { newambulance, availableambulance } from '.././controllers/ambulances.controller.js';
// import router from './user.route';
const app = express();
app.use(express.json());
const router = express.Router();
import auth from '../middleware/auth.js';



// router.post('/ambulance', ambulance);
// router.get('/ambulance', ambulance);

// router.get('/ambulance', availableambulance)


<<<<<<< HEAD
router.post('/driver/ambulance',auth,newambulance);

router.post('/user/ambulance',auth,availableambulance);
=======
router.post('/driver/ambulance', newambulance);

router.post('/user/ambulance', availableambulance);
>>>>>>> main

export default router;