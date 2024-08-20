import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { category } from "../../database/model";

export const categoryInfo = async (req: Request, res: Response) => {
    
    let body =req.body

    let categoryGet= new Model.category(body)

    await categoryGet.save()

 return res.send({message:"category created successfully",data:categoryGet})
    
}