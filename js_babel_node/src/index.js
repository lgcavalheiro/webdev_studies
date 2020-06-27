import express from 'express';
import { Hello } from './test';

const app = express();

app.get('/', (req, res) => {
    let hello = new Hello();
    let greet = hello.greet('John Doe');
    res.send(`<h1>${greet}</h1>`);
    console.log(`New connection from ${req.hostname}`)
})

app.listen(3001, () => {
    console.log('Listening to port 3001...')
})