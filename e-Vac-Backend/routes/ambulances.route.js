import express from 'express';
import { ambulance,availableambulance} from '.././controllers/ambulances.controller.js';
// import router from './user.route';
const app = express();
app.use(express.json());
const router = express.Router();




router.post('/ambulance', ambulance);
// router.get('/ambulance', ambulance);

router.get('/ambulance', availableambulance)

export default router;