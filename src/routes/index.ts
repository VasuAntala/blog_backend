import { Response, Request, Router } from "express";
import  authRouter from "./auth";
import blogRouter from "./post";
import readRouter  from "./read";
import categoryRouter from "./category"
import { verifytoken } from "../helper/jwt";



const router = Router();


router.use("/auth", authRouter);
router.use("/post",verifytoken,blogRouter);
router.use("/get",verifytoken,readRouter);
router.use("/category",categoryRouter);

export default router