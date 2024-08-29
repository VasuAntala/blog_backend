import { Response, Request, Router } from "express";
import  Multer  from "multer";
import path from "path";


const storage = Multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

    export const upload = Multer({ storage: storage })