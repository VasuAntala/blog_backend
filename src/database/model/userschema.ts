
import mongoose, { Schema, model } from "mongoose";


const users = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },

    email: {
        type: String,
        required: [true, 'email is required'],

    },

    password: {
        type: String,
        required: [true, 'Password is required'],
      
       
    }
})

export const user = mongoose.model("user", users);

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
        // required: [true, 'image is required'],
    },

    createdBy: {
        type: String,
        // required: [true, 'createdBy is required']  
    },

    date:{
        type: Date,
        default: Date.now
    }
})

export const blog = mongoose.model("blog", blogs); 


// export default User