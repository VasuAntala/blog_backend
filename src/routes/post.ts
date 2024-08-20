import { Response,Request,Router } from "express";
import { blogController } from "../controller";

import { verifytoken } from "../helper/jwt";

const blogRouter = Router();

blogRouter.post ("/create", blogController.blog);



export default blogRouter