import express from 'express';
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import errorHandler from "./middleware/errorMidleware.js";
import config from "./config/config.js";


const app = express();


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/forum', postRoutes);
app.use(errorHandler);


const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.log('MongoDB connection error', err);
    }
}


const startServer = async () => {
    await connectDB();
    app.listen(config.port, () => {
        console.log(`Server started on port ${config.port}. Press Ctrl-C to finish`);
    })
}


startServer();
