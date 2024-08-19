
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Model } from "../database";



export const generateToken = (data: any) => {
    return jwt.sign(data, "secret", { expiresIn: "1d" })
}

export async function verifytoken(req: Request, res: Response, next: any) {

    const {authorization} = req.headers;
    console.log(authorization)
    if ( authorization) {
      const bearer = authorization.split(" ");
      const bearerToken = bearer[1];
try {
    let isVerifyToken = jwt.verify(bearerToken , 'secret') as any
   
        console.log(isVerifyToken)
    let userID= isVerifyToken.user
  
    // console.log(ooo)
   let result = await  Model.user.findOne({ _id: userID._id, isActive: true })

   console.log('result', {result});


    if (result) {  

        req.body.user = 
        { result:{
            id: userID._id,
            name: userID.name,
            email: userID.email
        }};
        next()
     }
} catch (error) {
    console.log(error)
    if( error && (error as Error).name === "TokenExpiredError"){
                return res.status(401).send({message:"token expired"})
            }else if (error && (error as Error).name === "JsonWebTokenError"){

                return res.status(401).send({message:"invalid token"})
            }
}
    } else {
      res.sendStatus(401).send({message:"authorization failed. token not found."});
    }
  }
