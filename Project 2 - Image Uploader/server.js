import express from "express"
import { UploadController } from "./controller/UploadController.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

cloudinary.config({ 
    cloud_name: 'dva3iqofl', 
    api_key: '343775611726782', 
    api_secret: 'cXAazFYHiSWQDV58EZU6_UojovQ' 
    
    // cXAazFYHiSWQDV58EZU6_UojovQ    
});

 
// Database connection

mongoose.connect('mongodb+srv://mnraza1907:joucZTUxihODcLTe@cluster0.i5oia.mongodb.net/', { dbName: "ImageUploader" })
    .then(() => {
        console.log('Connected to MongoDB ✅');
    })
    .catch((err) => { console.log('Error in connecting to MongoDB ❌', err) });


app.get("/", (req, res) => {
    res.render("index.ejs", { url: null });
});
// app.post("/upload", UploadController);

const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname))
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const upload = multer({ storage: storage })
  
  
app.post('/upload', upload.single('avatar'), async (req, res) => {

    
  })
  
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

})