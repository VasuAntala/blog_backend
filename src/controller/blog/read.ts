import { Response, Request, Router } from "express";
import { Model } from "../../database";

export const Data = async (req: Request, res: Response) => {
    let user = req.body;

    let Data = await Model.user.findOne({_id: req.body.id});

    // rest of your code
}