import mongoose, { Schema } from "mongoose";


const categorys = new Schema({
    category:{
        type: String,
        required: [true, 'Category is required'],
    },

} )

 export const category = mongoose.model("category", categorys);