import { Response, Request } from "express";

import { Model } from "../../database";




export const register =async (req: Request, res: Response) => {
try {
    
    let body = req.body;

    let user = new Model.user(body);
   let existingUser = await Model.user.findOne({email: body.email})

    if(existingUser?.email){
        res.status(400).send({message: "user already exists"})}

    if(!user.password){
        res.status(400).send(  {message: "password is required"},)
    }
    

   let data = await user.save()
    
    res.send({
        message: "register",
        data : {
            id: data.id,
            name: data.name,
            email: data.email

        }
    })
} catch (err) {
    

    res.status(500).send(err)
}
    
}

export const login = (req: Request, res: Response) => {

    let { email, password } = req.body;

   

    res.send("login")

}
