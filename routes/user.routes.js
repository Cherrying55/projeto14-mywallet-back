
import {Router} from 'express';
import { signin, signup } from '../controllers/usercontrollers.js';

const userrouter = Router();
userrouter.post('/sign-in', signin);
userrouter.post('/sign-up', signup);
export default userrouter;