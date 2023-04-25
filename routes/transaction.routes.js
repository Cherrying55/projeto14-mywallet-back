
import {Router} from 'express';
import { validamodelo } from '../middlewares/universal.middleware.js';
import { gettransactions, posttransacoes } from '../controllers/transactioncontrollers.js';
import { transactionmodel } from '../model/transaction.model.js';

const transactionrouter = Router();
transactionrouter.post('/transactions', validamodelo(transactionmodel), gettransactions);
transactionrouter.get('/transactions', posttransacoes);
export default transactionrouter;