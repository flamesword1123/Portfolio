const express = require('express')
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});