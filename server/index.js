require('newrelic');
const express = require('express');
const app = express();
const port = 3000;

app.use('/listing/:id', express.static('public'))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Listening on port ${port}...`))