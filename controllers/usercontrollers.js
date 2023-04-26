import { compareSync, hashSync } from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../connections/db.js";


export async function signin(req,res){

    const { email, password } = req.body;
    const usercollection = db.collection("usercollection");
    try{
        const usernadb = await usercollection.findOne({email})
        if(usernadb){
            const correctpass = compareSync(password, usernadb.password);
            if(correctpass){
                const token = uuid();
        
				await db.collection("sessions").insertOne({userId: usernadb._id,token})
                res.send({token, nome: usernadb.nome});
            }
            else{
                res.sendStatus(401);
            }
        }
    }
    catch (error){
        return res.status(500).send(error.message);
    }
    


}

export async function signup(req,res){

    const { nome, email, password } = req.body;
    const usercollection = db.collection("usercollection");
    try{
        const jatemusuario = await usercollection.findOne({email})
        if(!jatemusuario){
            const senhacriptografada = hashSync(password, 10);
            const novousuario = await usercollection.insertOne({nome, email, password: senhacriptografada})
            res.sendStatus(201);

        }
        else{
            res.sendStatus(409)
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}