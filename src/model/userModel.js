import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    }
},{
    versionKey: false,
        toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
})

export default mongoose.model('User', userAccountSchema, 'users');