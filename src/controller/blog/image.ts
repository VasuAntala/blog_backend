import { Response, Request, Router } from "express";
import  {upload}  from "../../helper/multer";


export const Image =  (req: Request, res: Response) => {
   
        console.log(req.file);
        res.send("upload success");
      
}


export const uploadMiddleware = upload.single('image');
