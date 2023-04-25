import express from "express";
import cors from 'cors';
import userrouter from "./routes/user.routes";
import transactionrouter from "./routes/transaction.routes";
import { Router } from "express";

const app = express();
app.use(cors());
app.use(express.json());


router = Router();
router.use(userrouter);
router.use(transactionrouter);
app.use(router);