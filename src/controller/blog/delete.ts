import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { ObjectId } from "mongodb";

export const Delete = async (req: Request, res: Response) => {
  
    let deleteData = await Model.blog.deleteOne({
        
            _id: new ObjectId("66c4a2fb3af89bc8e97c0688"),
      
    });
    return res.send({ message: "blog deleted successfully", data: deleteData });
}