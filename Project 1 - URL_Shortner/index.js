import express from 'express';
import mongoose from 'mongoose';
import { getOriginalUrl, ShortUrlController } from './controller/ShortUrlController.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://mnraza1907:joucZTUxihODcLTe@cluster0.i5oia.mongodb.net/', { dbName: "UrlShorten" }).then(() => {
    console.log('Connected to MongoDB ✅');
}).catch((err) => { console.log('Error in connecting to MongoDB ❌', err) });

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Shorten App', shortUrl: null });
});

app.post('/shorten', ShortUrlController);
app.get('/:shortCode', getOriginalUrl);

const port = 3004;

app.listen(port, () => {
    console.log('Server is running on port 3004 ✅');
});