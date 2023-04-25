
import {Router} from 'express';
import { signin, signup } from '../controllers/usercontrollers.js';
import { gettransactions, posttransacoes } from '../controllers/transactioncontrollers.js';

const transactionrouter = Router();
transactionrouter.post('/transactions/:type', gettransactions);
transactionrouter.get('/transactions/:type', posttransacoes);
export default transactionrouter;