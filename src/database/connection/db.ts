import mongoose from 'mongoose';
import express from 'express'
const mongooseConnection = express()  
mongoose.set('strictQuery', true);  
mongoose.connect(
  "mongodb+srv://vasuantala123:Vasu123@cluster0.p1ilxej.mongodb.net/blogs",
).then(() => console.log('Database successfully connected')).catch(err => console.log(err));
export { mongooseConnection }
