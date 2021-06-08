const express = require('express');
const { notes } = require('./db/db');

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static('public'));
app.disable('etag');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});