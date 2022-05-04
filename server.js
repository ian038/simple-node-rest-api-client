const express = require('express');
const app = express();
const fs = require("fs");

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/read', function (req, res) {
    fs.readFile(__dirname + "/" + "spartans.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.post('/create', function (req, res) {
    console.log(req.body)
    res.json(req.body)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Example app listening on", port)
})