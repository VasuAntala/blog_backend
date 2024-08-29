import { Response, Request, Router } from "express";    
import { readController } from "../controller";

const readRouter = Router();

readRouter.get("/read", readController.Data);
readRouter.get("/userdata", readController.userData);

export default readRouter