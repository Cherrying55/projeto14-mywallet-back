import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();




const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado com sucesso!");
} catch (err) {
  console.log(err);
}

export const db = mongoClient.db("myWallet");