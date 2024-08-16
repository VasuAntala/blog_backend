
import mongoose, { Schema, model } from "mongoose"; 


const users = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        
    }
})

export const user = mongoose.model("user", users);

// export default User