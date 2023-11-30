const express = require('express');
const app = express();
require('./src/db.js')

// Middleware and routes will be added here
const routes = require('./src/routes/index.js');
// const productsRouter = require('./src/routes/products.router');

// Add middleware and other routes as needed

app.use('/', routes);

// Handle other endpoints or invalid requests
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});