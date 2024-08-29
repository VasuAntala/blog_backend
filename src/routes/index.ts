import { Response, Request, Router } from "express";
import  authRouter from "./auth";
import blogRouter from "./post";
import readRouter  from "./read";
import categoryRouter from "./category"
import updateRouter from "./update"
import deleteRouter from "./delete";
import imageRouter from "./image";
import { verifytoken } from "../helper/jwt";



const router = Router();


router.use("/auth", authRouter);
router.use("/post",verifytoken,blogRouter);
router.use("/get",readRouter);
router.use("/category",categoryRouter);
router.use('/categoryget',categoryRouter)
router.use('/update',updateRouter)
router.use('/delete',deleteRouter)
router.use('/image',imageRouter)

export default router