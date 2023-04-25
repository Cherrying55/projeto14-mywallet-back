
import {Router} from 'express';
import { signin, signup } from '../controllers/usercontrollers.js';
import { validamodelo } from '../middlewares/universal.middleware.js';
import { cadastromodel, loginmodel } from '../model/user.model.js';
import { transactionmodel } from '../model/transaction.model.js';

const userrouter = Router();
userrouter.post('/sign-in', validamodelo(loginmodel), signin);
userrouter.post('/sign-up', validamodelo(cadastromodel), signup);
export default userrouter;