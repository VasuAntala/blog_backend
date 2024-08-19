import { Response, Request, Router } from "express";    
import { readController } from "../controller";

const readRouter = Router();

readRouter.get("/read/:id", readController.Data);

export default readRouter