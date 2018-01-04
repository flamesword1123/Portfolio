const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.resolve('./public')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});