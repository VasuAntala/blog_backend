import { Response, Request, Router } from "express";
import { Model } from "../../database";
import { ObjectId } from "mongodb";


export const Update = async (req: Request, res: Response) => {


    let update = await Model.blog.updateOne({

        $match: {
            
            _id: new ObjectId("66c4a25a3af89bc8e97c0676"),
        },

        $set:{

            title:"music"
        }
    });

    return res.send({ message: "blog updated successfully", data: update });

}