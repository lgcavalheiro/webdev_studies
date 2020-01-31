const express = require('express');
const port = 3003;
const app = express();

app.get('/products', (req, res, next) => {
    res.send({name: 'Notebook', price: 2499.99})
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
