import express from 'express';
import path from 'path';

const port = 3002;
const app = express();

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    res.json(
        {
            message: 'Form submitted successfully',
            success: true
        });
});
app.get('/products', (req, res) => {
    res.json({ products });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);