import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,

    },
    shortCode: {
        type: String,

    },

})
export const Url = mongoose.model('shortUrl', urlSchema);