import express from 'express';
import { newambulance,availableambulance} from '.././controllers/ambulances.controller.js';
// import router from './user.route';
const app = express();
app.use(express.json());
const router = express.Router();
import auth from '../middleware/auth';



// router.post('/ambulance', ambulance);
// router.get('/ambulance', ambulance);

// router.get('/ambulance', availableambulance)


router.post('/driver/ambulance',auth,newambulance);

router.post('/user/ambulance',auth,availableambulance);

export default router;