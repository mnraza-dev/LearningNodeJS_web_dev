import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs',{title: 'Home'});x
});

const port = 3004;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});