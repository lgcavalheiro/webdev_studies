const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', (req, res) => res.send('OK'));

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '.')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => { 
    upload(req, res, err => {
        if(err) {
            return res.end('An error ocurred')
        }

        res.end('File uploaded!')
    }) 
})

app.listen(8080, () => console.log('Server is running on port 8080...'));