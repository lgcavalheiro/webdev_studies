const express = require('express');
const port = 3003;
const app = express();
const database = require('./database.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
    res.send(database.getProducts())
});

app.get('/products/:id', (req, res) => {
    res.send(database.getProduct(req.params.id))
});

app.post('/products', (req, res) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); //JSON
});

app.put('/products/:id', (req, res) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); //JSON
});

app.delete('/products/:id', (req, res) => {
    const product = database.deleteProduct(req.params.id);
    res.send(product); //JSON
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
