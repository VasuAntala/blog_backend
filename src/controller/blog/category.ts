import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { category } from "../../database/model";

export const categoryInfo = async (req: Request, res: Response) => {
    
    let body =req.body

    let categoryGet= new Model.category(body)

    await categoryGet.save()

 return res.send({message:"category created successfully",data:categoryGet})
    
}

export const seecategory = async (req: Request, res: Response) => {

    let categoryGet = await Model.category.find(
        {
            _id:'66c45b881e842a8382992f6b'
       }
    )

    
    return res.send({message:"category get successfully",data:categoryGet})
    
}