import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { ObjectId } from "mongodb";

export const Delete = async (req: Request, res: Response) => {
  
    let deleteData = await Model.blog.deleteOne({
        $match: {
            
            _id: new ObjectId("66c4a2fb3af89bc8e97c0688"),
        },

        
            _id: new ObjectId("66c4a2fb3af89bc8e97c0688"),
      
    });
    return res.send({ message: "blog deleted successfully", data: deleteData });
}

export const deleteUser = async (req: Request, res: Response) => {
  
    let deleteData = await Model.blog.deleteMany({
        $match: {
            
            _id: new ObjectId("66c4389be9a1b8a6202663b0"),
        },

        
            _id: new ObjectId("66c4389be9a1b8a6202663b0"),
      
    });
    return res.send({ message: "blog deleted successfully", data: deleteUser });
}