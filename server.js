const express = require('express');
const { notes } = require('./Develop/db/db.json');

const app = express();

app.get('/Develop/db/db.json', (req, res) => {
    res.send('Hello!');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});