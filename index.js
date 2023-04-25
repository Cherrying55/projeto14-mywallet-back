import express from "express";
import { Router } from "express";
import cors from 'cors';
import userrouter from "./routes/user.routes.js";
import transactionrouter from "./routes/transaction.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const router = Router();
router.use(userrouter);
router.use(transactionrouter);
app.use(router);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});