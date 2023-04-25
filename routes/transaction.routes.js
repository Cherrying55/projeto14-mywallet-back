
import {Router} from 'express';
import { validamodelo } from '../middlewares/universal.middleware.js';
import { gettransactions, posttransacoes } from '../controllers/transactioncontrollers.js';
import { transactionmodel } from '../model/transaction.model.js';

const transactionrouter = Router();
transactionrouter.post('/transactions/:type', validamodelo(transactionmodel), gettransactions);
transactionrouter.get('/transactions/:type', posttransacoes);
export default transactionrouter;