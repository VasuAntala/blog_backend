import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { ObjectId } from "mongodb";
// import { createLanguageService } from "typescript";

export const Data = async (req: Request, res: Response) => {
    let user = req.body;

    let Data = await Model.blog.find({
        category: new ObjectId("66c45b881e842a8382992f6b")  //music category
    }).sort({ createdAt: 1 });

    console.log(Data)
    return res.send({message:"data get successfully",data:Data})

   
    // rest of your code
}

