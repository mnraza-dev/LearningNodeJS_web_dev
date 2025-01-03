import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    filename: String,
    publicId: String,
    imgUrl: String,

})

export const Image = mongoose.model('Image', imageSchema);