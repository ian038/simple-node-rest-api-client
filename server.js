const express = require('express');
const app = express();
const fs = require("fs");

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/read', function (req, res) {
    fs.readFile(__dirname + "/" + "spartans.json", 'utf8', function (err, data) {
        console.log("List of spartans " + data);
        res.json(JSON.parse(data));
    });
})

app.post('/create', function (req, res) {
    console.log("Creating new spartan: ", req.body)
    res.json(req.body)
})

app.put('/update', function (req, res) {
    console.log("Updating spartan info: ", req.body)
    res.json(req.body)
})

app.delete('/remove/:spartanId', function (req, res) {
    const { spartanId } = req.params
    fs.readFile(__dirname + "/" + "spartans.json", 'utf8', function (err, data) {
        data = JSON.parse(data)
        console.log("Deleting spartan", data["spartan" + spartanId])
        res.json(data["spartan" + spartanId])
    });
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Example app listening on", port)
})