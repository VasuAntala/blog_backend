import { Response, Request, Router } from "express";
import { categoryController } from "../controller";

const categoryRouter = Router();

categoryRouter.post("/addCategory", categoryController.categoryInfo);

export default categoryRouter