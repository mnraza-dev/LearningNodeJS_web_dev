import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
           dbName: process.env.DB_NAME,
        });
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}
