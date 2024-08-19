import { Response, Request, Router } from "express";
import  authRouter from "./auth";
import blogRouter from "./post";
import readRouter  from "./read";
import { verifytoken } from "../helper/jwt";



const router = Router();


router.use("/auth", authRouter);
router.use("/post",blogRouter);
router.use("/get",readRouter);

export default router