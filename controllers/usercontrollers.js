import { compareSync } from "bcrypt";

export async function signin(res,req){

    const email= req.body.email;
    const password = req.body.password;
    const usercollection = db.collection("usercollection")
    try{
        const usernadb = await usercollection.findOne({email})
        if(usernadb){
            const correctpass = compareSync(password, usernadb.password);
            if(correctpass){
                const token = uuid();
        
				await db.collection("sessions").insertOne({userId: user._id,token})
                res.send(token);
            }
            else{
                res.sendStatus(401);
            }
        }
    }
    catch (error){
        return res.status(500).send(err.message);
    }
    


}

export async function signup(req,res){

    const { nome, email, password } = req.body;
    const usercollection = db.collection("usercollection");
    try{
        const jatemusuario = await usercollection.findOne({email})
        if(!jatemusuario){
            const senhacriptografada = bcrypt.hashSync(senha, 10);
            const novousuario = await usercollection.insertOne({nome, email, password: senhacriptografada})
            res.sendStatus(201);

        }
    }
    catch (error) {
        return res.status(500).send(err.message);
    }
}