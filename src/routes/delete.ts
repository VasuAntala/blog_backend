import { Response, Request, Router } from "express";
import { deleteController } from "../controller";


const deleteRouter = Router();


deleteRouter.delete("/delete", deleteController.Delete);
deleteRouter.delete("/deleteuser", deleteController.deleteUser);


export default deleteRouter