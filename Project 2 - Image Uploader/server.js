import express from "express"
import { UploadController } from "./controller/UploadController.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// Database connection

mongoose.connect('mongodb+srv://mnraza1907:joucZTUxihODcLTe@cluster0.i5oia.mongodb.net/', { dbName: "ImageUploader" })
    .then(() => {
        console.log('Connected to MongoDB ✅');
    })
    .catch((err) => { console.log('Error in connecting to MongoDB ❌', err) });


app.get("/", (req, res) => {
    res.render("index.ejs", { url: null });
});
app.post("/upload", UploadController);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

})