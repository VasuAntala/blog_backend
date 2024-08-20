import mongoose, { Schema } from "mongoose";

const blogs = new Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
    },

    description: {
        type: String,
        required: [true, 'description is required'],
    },

    image: {
        type: String,
        required: [true, 'image is required'],
    },

    createdBy: {
        type: String,
        
        // required: [true, 'createdBy is required']  
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const blog = mongoose.model("blog", blogs);
