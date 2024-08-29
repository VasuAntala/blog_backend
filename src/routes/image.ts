import { Response, Request, Router } from "express";
import { imageController } from "../controller";


const imageRouter = Router();

imageRouter.post("/upload", imageController.uploadMiddleware, imageController.Image);

export default imageRouter