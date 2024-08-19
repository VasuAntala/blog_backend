import { Response, Request } from "express";

import { Model } from "../../database";

import bcrypt from "bcrypt";

import { hashPassword } from "../../helper/bcrypt";

import { generateToken } from "../../helper/jwt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";




export const register = async (req: Request, res: Response) => {
    try {

        let body = req.body;

        let user = new Model.user(body);


        if (!user.name || !user.email || !user.password) {
            return res.status(400).send({ message: "name, email and password are required" },)
        }

     
        if (user.password.length < 8) {

            return res.status(400).send({ message: "password must be at least 8 characters" },)
        }

        if (user.password) {
            user.password = await hashPassword(user.password)
        }
        let existingUser = await Model.user.findOne({ email: body.email, name: body.name })


        if (existingUser?.email && existingUser?.name) {
            return res.status(409).send({ message: "user already exists" })
        }


        let data = await user.save()

        return res.send({
            message: "user created successfully",
            data: {
                id: data.id,
                name: data.name,
                email: data.email

            }
        })
    } catch (err) {
       

        return res.status(500).send('Internal Server Error')
    }

}

export const login = async (req: Request, res: Response) => {
try {
    
    let body = req.body;

        let userDoc =await Model.user.findOne({ email: body.email })


    if(userDoc){
             bcrypt.compare(body.password, userDoc.password ,(err, result) => {

                    console.log(result)
            if(err){
                return res.status(500).send({message:"internal server error"})
            }

            
            if(result){
   
                const user = userDoc.toObject() as any ;
                delete user.password;
            
                delete user.__v

                let token = generateToken({user })

                
                    //   try {
                    //     console.log(jwt.verify(token+'asasda',"secret"))
                    //   } catch (error) {
                       
                    //     if( error && (error as Error).name === "TokenExpiredError"){
                    //         return res.status(401).send({message:"token expired"})
                    //     }else if (error && (error as Error).name === "JsonWebTokenError"){

                    //         return res.status(401).send({message:"invalid token"})
                    //     }
                      
                    //   }
                        
                        return res.send({message:"login successful",data:{token:token}})
                   
            }
        }
       ) }else{
        return res.status(404).send({message:"user not found"})
       }

 
} catch (error) {
 

    return res.status(500).send('Internal Server Error')
}

}
