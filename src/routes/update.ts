import { Response, Request, Router } from "express";
import { updateController } from "../controller";

const updateRouter = Router();

updateRouter.put("/update", updateController.Update);

export default updateRouter


