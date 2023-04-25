export async function gettransactions(req,res){


  const { authorization } = req.header;
  const token = authorization?.replace('Bearer ', '');

  if(!token) {res.sendStatus(401);}

  const session = await db.collection("sessions").findOne({ token });
  if (!session) res.sendStatus(401);

	const user = await db.collection("users").findOne({ 
		_id: session.userId 
	})

  if(user) {
    const transactioncollection = db.collection("transactions");
    try{
        const transacoes = await transactioncollection.find({user: user.user, type: req.query.type}).toArray()
        res.send(transacoes)
    }
    catch(error){
        return res.status(500).send(err.message);
    }
  } else {
    res.sendStatus(401);
  }


}

export async function posttransacoes(req,res){

    const { authorization } = req.header;
  const token = authorization?.replace('Bearer ', '');
  const { value, description } = req.body;

  if(!token) {res.sendStatus(401);}

  const session = await db.collection("sessions").findOne({ token });
  if (!session) res.sendStatus(401);

	const user = await db.collection("users").findOne({ 
		_id: session.userId 
	})

  if(user) {
    const transactioncollection = db.collection("transactions");
    try{
        const novatransacao = await transactioncollection.insertOne({value, description, user: user.user, type: req.query.type})
        res.sendStatus(201);
    }
    catch(error){
        return res.status(500).send(err.message);
    }
  } else {
    res.sendStatus(401);
  }

}