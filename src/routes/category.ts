import { Response, Request, Router } from "express";
import { categoryController } from "../controller";

const categoryRouter = Router();

categoryRouter.post("/addCategory", categoryController.categoryInfo);
categoryRouter.get("/getCategory", categoryController.seecategory);

export default categoryRouter