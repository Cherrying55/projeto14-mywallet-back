const mongoClient = new MongoClient(process.env.MONGO_URI);
const db1 = "";

mongoClient.connect().then(() => {
	db1 = mongoClient.db("chat");
});

export const db = db1;