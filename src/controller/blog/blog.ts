import {Response, Request , Router} from "express"
import { Model } from "../../database";
import jwt from "jsonwebtoken"
import { user } from "../../database/model"



// const router = Router();

export const blog = async (req: Request, res: Response) => {
    const createdBy = req.body.user._id
    let body = {...req.body ,createdBy}



    let blog= new Model.blog(body)

   
    
    await blog.save()
 return   res.send({message:"blog created successfully",data:blog})
    
    
}


    //  jwt.verify(req.body.token, "secret") 
    //     if(user) {
    //         res.send({message:"valid token"})
    //      return  res.send({message:"blog created successfully",data:body})

    //     }
    // else {
    //     console.log({resul:"invalid token"})
    // }   

    
