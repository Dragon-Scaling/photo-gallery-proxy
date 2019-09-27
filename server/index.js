require('newrelic');
const express = require('express');
const app = express();
const port = 3000;

app.use('/listing/:id', express.static('public'))

// app.get('/', (req, res) => res.send('Hello World'))

// smart proxy has get request handler that then REDIRECTS to service server
app.get('/api/photos/:propertyId', (req, res) => {
  // redirect is absolute path to service server, taking in param to specify listing id
  res.redirect(301, `http://ec2-54-219-149-8.us-west-1.compute.amazonaws.com/api/photos/${req.params.propertyId}`)
})

app.listen(port, () => console.log(`Listening on port ${port}...`))