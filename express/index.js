import { log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { User } from './models/User.js';

const port = 3002;
const app = express();

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://mnraza1907:joucZTUxihODcLTe@cluster0.i5oia.mongodb.net/", {
    dbName: 'nodejs_mastery',
}
).then(() => {
    console.log('Connected to MongoDB ✅');

}).catch((err) => {
    console.log('Error:', err);
});

const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 2000
    },
    {
        id: 2,
        name: 'Mobile',
        price: 1000
    },
    {
        id: 3,
        name: 'Tablet',
        price: 500
    }];

app.get('/', (req, res) => {
    res.render('index.ejs');
}
);
app.post('/form-submit', (req, res) => {
    console.log(req.body);
    res.json(
        {
            message: 'Form submitted successfully',
            success: true
        });
});

app.post('/data', async (req, res) => {
    console.log(req.body);
    try {
        let user = await User.create(req.body);
        res.json({
            message: 'User Created successfully ✅',
            user: user,
            success: true
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false
        });
    }


});


app.get('/products', (req, res) => {
    res.json({ products });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);