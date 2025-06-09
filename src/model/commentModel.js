import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
    },
    likes:{
        type: Number,
        default: 0,
    }
})
export default commentSchema;