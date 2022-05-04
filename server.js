const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', function (req, res) {
    res.send('Hello world')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Example app listening on", port)
})