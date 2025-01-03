import express from "express"
import { UploadController } from "./controller/UploadController.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.post("/upload", UploadController);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

})